import React from 'react';

import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Layout from '../Component/Shared/Layout';

export const router = createBrowserRouter([
    // Base Routes
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "",
                element: <App />,
            },

            // {
            //   path: "listing",
            //   element: <Listing />,
            // },
            // {
            //   path: "detailsListing",
            //   element: <DetailsListing />,
            // },
            // {
            //   path: "cardDetails",
            //   element: <CardDetails />,
            // },
            // {
            //   path: "/contact",
            //   element: <Contact />,
            // },
            // {
            //   path: "contactDetails",
            //   element: <ContactDetails />,
            // },
            // {
            //   path: "agents",

            //   element: <Agents />,
            // },

            // {
            //   path: "/about",
            //   element: <About />,
            // },
            // {
            //   path: "/login",
            //   element: <Login />,
            // },
            // {
            //   path: "/register",
            //   element: <Register />,
            // },
            // {
            //   path: "/damy",
            //   element: <Damy />,
            // },
        ],
    },

    // {
    //   path: "/user/dashboard",
    //   element: <UserLayout />,
    //   children: [
    //     {
    //       path: "/user/dashboard",
    //       element: <Dashboard />,
    //     },
    //     {
    //       path: "/user/dashboard/message",
    //       element: <Message />,
    //     },
    //     {
    //       path: "addproperties",
    //       element: <AddProperty />,
    //       children: [
    //         {
    //           path: "/user/dashboard/addproperties",
    //           element: <Description />,
    //         },

    //         {
    //           path: "media",
    //           element: <Media />,
    //         },
    //         {
    //           path: "location",
    //           element: <Location />,
    //         },
    //         {
    //           path: "details",
    //           element: <Details />,
    //         },
    //         {
    //           path: "additionalinfo",
    //           element: <AdditionalInfo />,
    //         },
    //       ],
    //     },
    //     {
    //       path: "myProperties",
    //       element: <MyProperties />,
    //     },
    //     {
    //       path: "favourites",
    //       element: <MyFavourities />,
    //     },
    //     {
    //       path: "savedSearch",
    //       element: <SavedSearch />,
    //     },
    //     {
    //       path: "reviews",
    //       element: <DashboardReview />,
    //     },
    //     {
    //       path: "myPackage",
    //       element: <MyPackage />,
    //     },
    //     {
    //       path: "profile",
    //       element: <MyProfile />,
    //     },
    //   ],
    // },
    // {
    //   path: "/admin/login",
    //   element: <AdminLogin />,
    // },

    // {
    //   path: "/admin/dashboard",
    //   element: <AdminLayout />,
    //   children: [
    //     {
    //       path: "/admin/dashboard",
    //       element: <AdminDashboard />,
    //     },
    //     {
    //       path: "/admin/dashboard/categorylist",
    //       element: <CategoryList />,
    //     },
    //     {
    //       path: "/admin/dashboard/addcategory",
    //       element: <AddCategory />,
    //     },
    //     {
    //       path: "/admin/dashboard/typelist",
    //       element: <TypeList />,
    //     },
    //     {
    //       path: "/admin/dashboard/addtype",
    //       element: <AddType />,
    //     },
    //     {
    //       path: "/admin/dashboard/packageslist",
    //       element: <PackagesList />,
    //     },
    //     {
    //       path: "/admin/dashboard/addpackage",
    //       element: <AddPackage />,
    //     },
    //     {
    //       path: "/admin/dashboard/subscriptionlist",
    //       element: <SubscriptionList />,
    //     },
    //     {
    //       path: "/admin/dashboard/addplan",
    //       element: <AddPlan />,
    //     },
    //     {
    //       path: "/admin/dashboard/countrylist",
    //       element: <CountryList />,
    //     },
    //     {
    //       path: "/admin/dashboard/addcountry",
    //       element: <AddCountry />,
    //     },
    //     {
    //       path: "/admin/dashboard/statelist",
    //       element: <StateList />,
    //     },
    //     {
    //       path: "/admin/dashboard/addstate",
    //       element: <AddState />,
    //     },
    //     {
    //       path: "/admin/dashboard/citylist",
    //       element: <CityList />,
    //     },
    //     {
    //       path: "/admin/dashboard/addcity",
    //       element: <AddCity />,
    //     },
    //     {
    //       path: "/admin/dashboard/active",
    //       element: <ActiveList />,
    //     },
    //     {
    //       path: "/admin/dashboard/inactive",
    //       element: <InactiveList />,
    //     },
    //     {
    //       path: "/admin/dashboard/status",
    //       element: <Status />,
    //     },
    //     {
    //       path: "/admin/dashboard/alladmin",
    //       element: <AllAdmin />,
    //     },
    //     {
    //       path: "/admin/dashboard/activeagents",
    //       element: <ActiveAgents />,
    //     },

    //     {
    //       path: "/admin/dashboard/pendingagents",
    //       element: <PendingAgents />,
    //     },
    //     {
    //       path: "/admin/dashboard/allowners",
    //       element: <AllOwners />,
    //     },
    //     {
    //       path: "/admin/dashboard/customers",
    //       element: <Customers />,
    //     },
    //     {
    //       path: "/admin/dashboard/subscribers",
    //       element: <Subscribers />,
    //     },
    //     {
    //       path: "/admin/dashboard/soldpackages",
    //       element: <SoldPackages />,
    //     },
    //     {
    //       path: "/admin/dashboard/websettings",
    //       element: <WebSettings />,
    //     },
    //     {
    //       path: "/admin/dashboard/simpletable",
    //       element: <SimpleTables />,
    //     },
    //     {
    //       path: "/admin/dashboard/generalelements",
    //       element: <GeneralElements />,
    //     },
    //   ],
    // },

    // {
    //   path: "/admin/demo",
    //   element: <Demo />,
    // },
]);
