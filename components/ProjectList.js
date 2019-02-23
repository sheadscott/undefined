import React, { Component } from "react";
import Link from "next/link";
import Project from "./Project";
import siteData from "../projectListData.js";

class ProjectList extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return false;
  }
  render() {
    return (
      <div>
        {siteData.map((project, index) => {
          console.log("oh crap its a render!", Math.random());
          return (
            <Link key={index} href={project.url}>
              <a onClick={this.props.openDrawer}>
                <Project project={project} />
              </a>
            </Link>
          );
        })}
      </div>
    );
  }
}

export default ProjectList;
