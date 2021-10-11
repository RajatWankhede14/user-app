import React from "react";
import { ChevronRightIcon, XCircleIcon } from "@heroicons/react/solid";

function UsersTable({ people, setPeople }) {
  const deleteUser = (element) => {
    let filter = people.filter((person) => person.first_name !== element);
    setPeople(filter);
  };
  return (
    <div>
      <div className="flex flex-col my-5">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-800">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-bold text-white uppercase tracking-wider"
                    >
                      First
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-bold text-white uppercase tracking-wider"
                    >
                      Last
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-bold text-white uppercase tracking-wider"
                    >
                      Email
                    </th>

                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-bold text-white uppercase tracking-wider"
                    >
                      Delete
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-bold text-white uppercase tracking-wider"
                    >
                      Edit
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {people.map((person) => (
                    <tr key={person.email}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">
                              {person.first_name}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {person.last_name}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {person.email}
                      </td>
                      <td className="px-7 py-4 whitespace-nowrap text-sm text-gray-500">
                        <XCircleIcon
                          className="w-7 h-7 text-red-600"
                          onClick={() => deleteUser(person.first_name)}
                        />
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <ChevronRightIcon className="h-7 w-7" />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UsersTable;
