import React from "react";
import Divider from '@mui/material/Divider';
import { TextsmsTwoTone } from "@mui/icons-material";
import texts from "../htmlTextsEnglish";

function Experience() {
    return (
        <div >
			<div className="row">
                <div className="experience-box col-lg-3">
                    {texts[9].content[1]}
                </div>
                <div className="experience-box col-lg-9">
                <h4></h4>
                </div>

            </div>
            <div className="row">
                <Divider />
            </div>
            <div className="row">
                <div className="col-lg-3">
                    {texts[10].content[1]}
                    {texts[11].content[1]}
                    {texts[12].content[1]}
                </div>
                <div className="col-lg-9">
                    {texts[13].content[1]}
                </div>
            </div>
            <div className="row">
            </div>
            <div className="row">
                <div className="col-lg-3">
                    {texts[14].content[1]}
                    {texts[15].content[1]}
                    {texts[16].content[1]}
                    {texts[16].content[2]}
                    {texts[16].content[3]}
                    {texts[16].content[4]}
                </div>
                <div className="col-lg-9">

                    {texts[17].content[1]}
                    {texts[17].content[2]}

                    <p></p>
                    {texts[17].content[3]}
                    {texts[17].content[4]}
                </div>
            </div>
            <div className="row">
            </div>

            <div className="row">
                <div className="col-lg-3">
                    {texts[18].content[1]}
                    {texts[19].content[1]}
                    {texts[20].content[1]}
                </div>
                <div className="col-lg-9">
                {texts[21].content[1]}
                </div>
            </div>
            <div className="row">
            </div>

            <div className="row">
                <div className="col-lg-3">
                    {texts[22].content[1]}
                    {texts[23].content[1]}
                    {texts[24].content[1]}
                </div>
                <div className="col-lg-9">
                    {texts[25].content[1]}
                </div>
            </div>
            <div className="row">
            </div>

            <div className="row">
                <div className="col-lg-3">
                    {texts[26].content[1]}
                    {texts[27].content[1]}
                    {texts[28].content[1]}
                </div>
                <div className="col-lg-9">
                    {texts[29].content[1]}
                </div>
            </div>
            <div className="row">
            </div>

            <div className="row">
                <div className="col-lg-3">
                    {texts[30].content[1]}
                    {texts[31].content[1]}
                    {texts[32].content[1]}
                </div>
                <div className="col-lg-9">
                    {texts[33].content[1]}
                </div>
            </div>

        </div>

   

    );
}

export default Experience;