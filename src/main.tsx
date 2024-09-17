import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "../src/styles/global.css";
import { Routes } from "../src/routes"; // Certifique-se de importar corretamente

const router = createBrowserRouter([
	{
		path: "*",
		element: <Routes />,
	},
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
);
