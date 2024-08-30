import { Route, Routes } from "react-router-dom";

import { DefaultLayout } from "./components/DefaultLayout";
import { Dap } from "./views/Dap";
import { ComingBack } from "./views/ComingBack";

export default function Router() {
    return (
        <Routes>
            <Route path="/" element={<DefaultLayout />}>
                <Route path="/" element={<Dap />} />
                <Route path="/coming" element={<ComingBack />} />
            </Route>
        </Routes>
    )
}
