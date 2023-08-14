import { render } from "solid-js/web"
import { Route, Router, Routes } from "@solidjs/router"
import Index from "./routes/index"
import Works, { works } from "./routes/works/index"
import WorkTemplate from "./components/work"
import { GridProvider } from "./components/grid"
import Layout from "./components/layout"
import Img from "./components/img"
import "./root.css"

render(
  () => (
    <GridProvider>
      <Router>
        <Routes>
          <Route path="/" component={Layout}>
            <Route path="/" component={Index} />
            <Route path="/works" component={Works} />
            {works.map(Work => (
              <Route
                path={"/works/" + Work.data.name}
                element={
                  <WorkTemplate {...Work.data}>
                    <Work.default components={{ img: Img }} />
                  </WorkTemplate>
                }
              />
            ))}
          </Route>
        </Routes>
      </Router>
    </GridProvider>
  ),
  document.getElementById("root")
)