import { Menubar } from "primereact/menubar";
import { NavLink } from "react-router-dom";
import SearchBox from "../SearchBox/SearchBox";
import { StyledProjectTitle } from "./NavigationBar.styles";
import "./NavigationBar.css";

const NavigationBar = ({ searchChange }) => {
  const companyTitleRenderer = (item) => (
    <NavLink
      to={item.href}
      className="d-flex align-items-center p-menuitem-link"
      style={item.menuitem?.style}
      onClick={item.menuitem?.onClick}
    >
      <StyledProjectTitle>{item.label}</StyledProjectTitle>
    </NavLink>
  );

  const itemRenderer = (item) => (
    <NavLink
      to={item.href}
      className="d-flex align-items-center p-menuitem-link p-0"
      style={item.menuitem?.style}
      onClick={item.menuitem?.onClick}
    >
      {item.icon && (
        <span className={item.icon} style={item.iconStyle?.style}></span>
      )}
      <span className="mx-2">{item.label}</span>
    </NavLink>
  );

  const items = [
    {
      label: "ACHS Directory",
      icon: "pi pi-home",
      href: "/home",
      menuitem: {
        style: {
          paddingTop: 0,
          paddingBottom: 0,
          marginLeft: "1rem",
          marginBlockStart: "0!important",
          marginBlockEnd: "0!important",
        },
      },
      template: companyTitleRenderer,
    },
    {
      label: "Departments",
      icon: "pi pi-home",
      href: "/home",
      menuitem: { style: { marginLeft: "1rem" } }, // Pass through options for the Math button
      items: [
        {
          label: "Math",
          icon: "pi pi-calculator",
          href: "/math",
          template: itemRenderer,
        },
        {
          label: "Science",
          icon: "pi pi-filter",
          href: "/science",
          template: itemRenderer,
          iconStyle: {
            style: {
              transform: "rotateX(180deg)",
            },
          },
        },
        {
          label: "English",
          icon: "pi pi-book",
          href: "/english",
          template: itemRenderer,
        },
        {
          label: "Social Studies",
          icon: "pi pi-building-columns",
          href: "/socialstudies",
          template: itemRenderer,
        },
        {
          label: "Special Education",
          icon: "pi pi-sparkles",
          href: "/sped",
          template: itemRenderer,
        },
        {
          label: "Physical Education",
          icon: "pi pi-heart",
          href: "/pe",
          template: itemRenderer,
        },
        {
          label: "Vocational",
          icon: "pi pi-hammer",
          href: "/voc",
          template: itemRenderer,
        },
        {
          label: "Other",
          icon: "pi pi-asterisk",
          href: "/other",
          template: itemRenderer,
        },
        {
          label: "Office",
          icon: "pi pi-building",
          href: "/office",
          template: itemRenderer,
        },
      ],
    },
  ];

  const start = (
    <img alt="logo" src="/hippo.png" height="40" className="mr-4"></img>
  );

  const end = <SearchBox searchChange={searchChange} />;

  return (
    <Menubar
      model={items}
      start={start}
      end={end}
      style={{ height: "58px", borderRadius: 0 }}
    />
  );
};

export default NavigationBar;
