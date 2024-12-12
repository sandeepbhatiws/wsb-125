import React from "react";
import Breadcrumb from "../../common/Breadcrumb";

export default function AddCategory() {

    const formHandler = (event) => {
        event.preventDefault();        

        var formData = new FormData(event.target);
        console.log(formData.get('name'));
    }

    return (
        <section className="w-full">
            <Breadcrumb
                path={"Parent Category"}
                path2={"Add Category"}
                slash={"/"}
            />
            <div className="w-full min-h-[610px]">
                <div className="max-w-[1220px] mx-auto py-5">
                    <h3 className="text-[26px] font-semibold bg-slate-100 py-3 px-4 rounded-t-md border border-slate-400">
                        Add Category
                    </h3>
                    <form onSubmit={ formHandler } className="border border-t-0 p-3 rounded-b-md border-slate-400" autoComplete="off">
                        <div className="mb-5">
                            <label
                                for="base-input"
                                className="block mb-5 text-md font-medium text-gray-900"
                            >
                                Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                id="base-input"
                                className="text-[19px] border-2 shadow-sm border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 px-3 "
                                placeholder="Name"
                            />
                        </div>
                        <div className="mb-5">
                            <label
                                for="base-input"
                                className="block mb-5 text-md font-medium text-gray-900"
                            >
                                Order
                            </label>
                            <input
                                type="text"
                                name="order"
                                id="base-input"
                                className="text-[19px] border-2 shadow-sm border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 px-3 "
                                placeholder="Order"
                            />
                        </div>
                        <button
                            type="submit"
                            className="focus:outline-none my-10 text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}
