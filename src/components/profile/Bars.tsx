import React from "react";
import { IconType } from "react-icons";
import { Link, useLocation } from "react-router-dom";

type Props = {
    icon: IconType;
    name: string;
    link: string;
};

const Bars = (props: Props) => {
    const active = props.link === useLocation().pathname ? "bg-slate-200" : ""

    return (
        <Link to={props.link} className={`flex p-[0.6rem] cursor-pointer hover:bg-slate-200 rounded-md items-center pl-4 ${active}`}>
            <props.icon className="h-7 w-7" />
            <p className="font-medium pl-4">{props.name}</p>
        </Link>
    );
};

export default Bars;
