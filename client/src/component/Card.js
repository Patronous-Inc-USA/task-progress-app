// import "./styles.css";
// import "bootstrap/dist/css/bootstrap.min.css";

import React from "react";
import { FaUserAlt } from "react-icons/fa";
import { AiFillDelete, AiOutlineEdit } from "react-icons/ai";
import StageToggle from '../component/stageAccordian'
import * as utils from '../utils/index';

import { MdModeEdit } from "react-icons/md";


export default class Card extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  renderManageSection = () => {
    return (
      <div style={{ marginTop: '.5rem' }}>
        <button onClick={() => this.props.submitCallback(this.props.taskDetails["_id"])} title={'Submit Task'} type="button" class="btn btn-primary btn-sm submit-task-btn-style">Submit</button>
        <span style={{ float: 'right' }}>
          <span onClick={() => this.props.editCallback(this.props.taskDetails)} style={{ marginRight: '0.5rem', marginLeft: '0.5rem' }}>
            <MdModeEdit title={'Edit'} className="icon-style" />
          </span>
          <span onClick={() => this.props.deleteCallback(this.props.taskDetails["_id"], this.props.taskDetails["task_name"])}>
            <AiFillDelete title={'Delete'} className="icon-style" />
          </span>
        </span>
      </div>
    )
  }

  renderAccordianSection = () => {
    return (
      <div style={{
        marginTop: '.5rem'
      }}>
        <StageToggle
          stage={this.props.taskDetails["status"]}
        />
      </div>
    )
  }

  render() {
    console.log('this.props', this.props);
    let priority = this.props.taskDetails["priority"];
    let color = "#ea7d24";
    if (priority === "High") {
      color = "#ce0000";
    } else if (priority === "Low") {
      color = "#f99d9d";
    }
    let manageByHeading = this.props.title === "All task" ? 'Created By' : 'Submitted By'
    let manageByName = this.props.title === "All task" ? this.props.taskDetails["createdByName"] : this.props.taskDetails["submittedByName"]
    return (
      <div className="col-sm-6 remove-cols-padding" style={{ marginTop: 5 }}>
        <div className="card bg-light text-dark">
          <div className="card-header" style={{ fontWeight: "bold", textAlign: "left" }}>
            {this.props.taskDetails["task_name"]}
          </div>
          <div className="card-body">
            {/* <span className="num-of-line-1" style={{ fontWeight: "bold", textAlign: "left" }}>
              {this.props.taskDetails["description"]}
            </span> */}
            <div>
              <span style={{ float: "left" }}>{"Priority :"}</span>
              <span style={{ color: color, paddingLeft: "5px" }}>
                {this.props.taskDetails["priority"]}
              </span>
            </div>
            {this.props.showManageSection ? this.renderManageSection() : null}
            {this.renderAccordianSection()}
          </div>
          <div class="card-footer" style={{ backgroundColor: "white" }}>
            <span className="num-of-line-2" style={{ float: "left" }}>
              {"Created At" + ': ' + utils.formatDate(this.props.taskDetails['createdAt'])}
            </span>
            <span className="num-of-line-2" style={{ float: "left", marginTop: '.4rem' }}>
              {manageByHeading + ': ' + manageByName}
            </span>
          </div>
        </div>
      </div>
    );
  }
}
