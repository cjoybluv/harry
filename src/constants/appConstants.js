export const mainMenu = [
  { label: "Demo", icon: "pi pi-fw pi-id-card", to: "/about" },
  { label: "Explorer", icon: "pi pi-fw pi-globe", to: "/explorer" },
  { label: "Login", icon: "pi pi-fw pi-user", to: "/login" },
];

export const demoMenu = [
  { label: "Dashboard", icon: "pi pi-fw pi-home", to: "/demo/dashboard" },
  {
    label: "UI Kit",
    icon: "pi pi-fw pi-sitemap",
    items: [
      {
        label: "Form Layout",
        icon: "pi pi-fw pi-id-card",
        to: "/demo/formlayout",
      },
      {
        label: "Input",
        icon: "pi pi-fw pi-check-square",
        to: "/demo/input",
      },
      {
        label: "Float Label",
        icon: "pi pi-fw pi-bookmark",
        to: "/demo/floatlabel",
      },
      {
        label: "Invalid State",
        icon: "pi pi-fw pi-exclamation-circle",
        to: "/demo/invalidstate",
      },
      { label: "Button", icon: "pi pi-fw pi-mobile", to: "/demo/button" },
      { label: "Table", icon: "pi pi-fw pi-table", to: "/demo/table" },
      { label: "List", icon: "pi pi-fw pi-list", to: "/demo/list" },
      { label: "Tree", icon: "pi pi-fw pi-share-alt", to: "/demo/tree" },
      { label: "Panel", icon: "pi pi-fw pi-tablet", to: "/demo/panel" },
      {
        label: "Overlay",
        icon: "pi pi-fw pi-clone",
        to: "/demo/overlay",
      },
      { label: "Menu", icon: "pi pi-fw pi-bars", to: "/demo/menu" },
      {
        label: "Message",
        icon: "pi pi-fw pi-comment",
        to: "/demo/messages",
      },
      { label: "File", icon: "pi pi-fw pi-file", to: "/demo/file" },
      {
        label: "Chart",
        icon: "pi pi-fw pi-chart-bar",
        to: "/demo/chart",
      },
      { label: "Misc", icon: "pi pi-fw pi-circle-off", to: "/demo/misc" },
    ],
  },
  {
    label: "Pages",
    icon: "pi pi-fw pi-clone",
    items: [
      { label: "Crud", icon: "pi pi-fw pi-user-edit", to: "/demo/crud" },
      {
        label: "Calendar",
        icon: "pi pi-fw pi-calendar-plus",
        to: "/demo/calendar",
      },
      {
        label: "Timeline",
        icon: "pi pi-fw pi-calendar",
        to: "/demo/timeline",
      },
      {
        label: "Empty",
        icon: "pi pi-fw pi-circle-off",
        to: "/demo/empty",
      },
    ],
  },
  {
    label: "Menu Hierarchy",
    icon: "pi pi-fw pi-search",
    items: [
      {
        label: "Submenu 1",
        icon: "pi pi-fw pi-bookmark",
        items: [
          {
            label: "Submenu 1.1",
            icon: "pi pi-fw pi-bookmark",
            items: [
              { label: "Submenu 1.1.1", icon: "pi pi-fw pi-bookmark" },
              { label: "Submenu 1.1.2", icon: "pi pi-fw pi-bookmark" },
              { label: "Submenu 1.1.3", icon: "pi pi-fw pi-bookmark" },
            ],
          },
          {
            label: "Submenu 1.2",
            icon: "pi pi-fw pi-bookmark",
            items: [
              { label: "Submenu 1.2.1", icon: "pi pi-fw pi-bookmark" },
              { label: "Submenu 1.2.2", icon: "pi pi-fw pi-bookmark" },
            ],
          },
        ],
      },
      {
        label: "Submenu 2",
        icon: "pi pi-fw pi-bookmark",
        items: [
          {
            label: "Submenu 2.1",
            icon: "pi pi-fw pi-bookmark",
            items: [
              { label: "Submenu 2.1.1", icon: "pi pi-fw pi-bookmark" },
              { label: "Submenu 2.1.2", icon: "pi pi-fw pi-bookmark" },
              { label: "Submenu 2.1.3", icon: "pi pi-fw pi-bookmark" },
            ],
          },
          {
            label: "Submenu 2.2",
            icon: "pi pi-fw pi-bookmark",
            items: [
              {
                label: "Submenu 2.2.1",
                icon: "pi pi-fw pi-bookmark",
                visible: false,
              },
              {
                label: "Submenu 2.2.2",
                icon: "pi pi-fw pi-bookmark",
                class: "text-pink-500",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    label: "Documentation",
    icon: "pi pi-fw pi-question",
    command: () => {
      window.location = "/documentation";
    },
  },
  {
    label: "View Source",
    icon: "pi pi-fw pi-search",
    command: () => {
      window.location = "https://github.com/primefaces/sigma-vue";
    },
  },
];
