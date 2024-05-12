import React from "react";
import { Fragment, useState } from "react";
import { Dialog, Disclosure, Menu, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  FunnelIcon,
  MinusIcon,
  PlusIcon,
  Squares2X2Icon,
} from "@heroicons/react/20/solid";
import { Box, Button, Checkbox, Pagination, TextField, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import HomeCard from "../HomePage/HomeCard";
import ProductCard from "./ProductCard";

const sortOptions = [
  { name: "Most Popular", href: "#", current: true },
  { name: "Best Rating", href: "#", current: false },
  { name: "Price: Low to High", href: "#", current: false },
  { name: "Price: High to Low", href: "#", current: false },
];
const subCategories = [
  { name: "Totes", href: "#" },
  { name: "Backpacks", href: "#" },
  { name: "Travel Bags", href: "#" },
  { name: "Hip Bags", href: "#" },
  { name: "Laptop Sleeves", href: "#" },
];
const filters = [
  {
    id: "typephone",
    name: "Loại Điện Thoại",
    options: [
      { value: "android", label: "Android", checked: false },
      { value: "iphone", label: "Iphone(IOS", checked: false },
    ],
  },
  {
    id: "promotion",
    name: "Khuyến Mãi",
    options: [
      { value: "5", label: "🔝 5%", checked: false },
      { value: "10", label: "🔝 10%", checked: false },
      { value: "20", label: "🔝 20%", checked: true },
      { value: "30", label: "🔝 30%", checked: false },
      { value: "40", label: "🔝 40%", checked: false },
    ],
  },
  {
    id: "ram",
    name: "RAM",
    options: [
      { value: "2GB", label: "2GB", checked: false },
      { value: "3GB", label: "3GB", checked: false },
      { value: "4GB", label: "4GB", checked: false },
      { value: "6GB", label: "6GB", checked: false },
      { value: "8GB", label: "8GB", checked: false },
      { value: "12GB", label: "12GB", checked: false },
    ],
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function FilterProduct() {
  return (
    <div className="bg-white">
      <div>
        <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-24">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900">
              <FilterAltIcon sx={{fontSize:40, bottom:3, position:"relative"}}/>
              Filter Product
            </h1>

            <div className="flex items-center">
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <Menu.Button className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                    Sort
                    <ChevronDownIcon
                      className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                      aria-hidden="true"
                    />
                  </Menu.Button>
                </div>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                      {sortOptions.map((option) => (
                        <Menu.Item key={option.name}>
                          {({ active }) => (
                            <a
                              href={option.href}
                              className={classNames(
                                option.current
                                  ? "font-medium text-gray-900"
                                  : "text-gray-500",
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm"
                              )}
                            >
                              {option.name}
                            </a>
                          )}
                        </Menu.Item>
                      ))}
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>

              <button
                type="button"
                className="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7"
              >
                <span className="sr-only">View grid</span>
                <Squares2X2Icon className="h-5 w-5" aria-hidden="true" />
              </button>
              <button
                type="button"
                className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
                onClick={() => setMobileFiltersOpen(true)}
              >
                <span className="sr-only">Filters</span>
                <FunnelIcon className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </div>

          <section aria-labelledby="products-heading" className="pb-24 pt-6">
            <h2 id="products-heading" className="sr-only">
              Products
            </h2>

            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
              {/* Filters */}
              <form className="hidden lg:block">
                <div>
                  <Typography variant="h5" className="text-black">
                    Price
                  </Typography>
                  <div className="flex justify-around items-center py-5">
                    <TextField
                      variant="outlined"
                      className="w-[40%]"
                      label="min"
                    />
                    <span>:</span>
                    <TextField
                      variant="outlined"
                      className="w-[40%]"
                      label="max"
                    />
                  </div>
                </div>

                {filters.map((section) => (
                  <Box>
                    <div className="flex justify-between items-center">
                      <Typography variant="h6" className="text-black">
                        {section.name}
                      </Typography>
                      <AddIcon />
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-black">
                      {section.options.map((item) => (
                        <div className="flex items-center">
                          <Checkbox />
                          <Typography variant="body2">{item.label}</Typography>
                        </div>
                      ))}
                    </div>
                    <hr />
                  </Box>
                ))}
                <div className="bg-blue-700 rounded-xl mt-5">
                    <Button className="px-5 w-full" sx={{ color: "white" }}>
                      <SearchIcon />
                      Seach
                    </Button>
                </div>
              </form>

              {/* Product grid */}
              <div className="lg:col-span-3">
                <div className="grid grid-cols-4 gap-5">
                    {[1, 1, 1, 1, 1, 1, 1, 1].map(() => <ProductCard/>)}
                </div>
                <div className="flex justify-center p-5">
                    <Pagination count={10} color="primary" />
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
