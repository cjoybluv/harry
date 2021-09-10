export const demoRoutes = [
  {
    path: "/demo/dashboard",
    name: "dashboard",
    component: () => import("@/components/demo/Dashboard"),
    meta: {
      layout: "demo/DemoLayout",
    },
  },
  {
    path: "/demo/formlayout",
    name: "formlayout",
    component: () => import("@/components/demo/FormLayoutDemo.vue"),
    meta: {
      layout: "demo/DemoLayout",
    },
  },
  {
    path: "/demo/input",
    name: "input",
    component: () => import("@/components/demo/InputDemo.vue"),
    meta: {
      layout: "demo/DemoLayout",
    },
  },
  {
    path: "/demo/floatlabel",
    name: "floatlabel",
    component: () => import("@/components/demo/FloatLabelDemo.vue"),
    meta: {
      layout: "demo/DemoLayout",
    },
  },
  {
    path: "/demo/invalidstate",
    name: "invalidstate",
    component: () => import("@/components/demo/InvalidStateDemo.vue"),
    meta: {
      layout: "demo/DemoLayout",
    },
  },
  {
    path: "/demo/button",
    name: "button",
    component: () => import("@/components/demo/ButtonDemo.vue"),
    meta: {
      layout: "demo/DemoLayout",
    },
  },
  {
    path: "/demo/table",
    name: "table",
    component: () => import("@/components/demo/TableDemo.vue"),
    meta: {
      layout: "demo/DemoLayout",
    },
  },
  {
    path: "/demo/list",
    name: "list",
    component: () => import("@/components/demo/ListDemo.vue"),
    meta: {
      layout: "demo/DemoLayout",
    },
  },
  {
    path: "/demo/tree",
    name: "tree",
    component: () => import("@/components/demo/TreeDemo.vue"),
    meta: {
      layout: "demo/DemoLayout",
    },
  },
  {
    path: "/demo/panel",
    name: "panel",
    component: () => import("@/components/demo/PanelsDemo.vue"),
    meta: {
      layout: "demo/DemoLayout",
    },
  },
  {
    path: "/demo/overlay",
    name: "overlay",
    component: () => import("@/components/demo/OverlayDemo.vue"),
    meta: {
      layout: "demo/DemoLayout",
    },
  },
  {
    path: "/demo/menu",
    component: () => import("@/components/demo/MenuDemo.vue"),
    meta: {
      layout: "demo/DemoLayout",
    },
    children: [
      {
        path: "/demo",
        component: () => import("@/components/demo/menu/PersonalDemo.vue"),
        meta: {
          layout: "demo/DemoLayout",
        },
      },
      {
        path: "/demo/menu/seat",
        component: () => import("@/components/demo/menu/SeatDemo.vue"),
        meta: {
          layout: "demo/DemoLayout",
        },
      },
      {
        path: "/demo/menu/payment",
        component: () => import("@/components/demo/menu/PaymentDemo.vue"),
        meta: {
          layout: "demo/DemoLayout",
        },
      },
      {
        path: "/demo/menu/confirmation",
        component: () => import("@/components/demo/menu/ConfirmationDemo.vue"),
        meta: {
          layout: "demo/DemoLayout",
        },
      },
    ],
  },
  {
    path: "/demo/messages",
    name: "messages",
    component: () => import("@/components/demo/MessagesDemo.vue"),
    meta: {
      layout: "demo/DemoLayout",
    },
  },
  {
    path: "/demo/file",
    name: "file",
    component: () => import("@/components/demo/FileDemo.vue"),
    meta: {
      layout: "demo/DemoLayout",
    },
  },
  {
    path: "/demo/chart",
    name: "chart",
    component: () => import("@/components/demo/ChartDemo.vue"),
    meta: {
      layout: "demo/DemoLayout",
    },
  },
  {
    path: "/demo/misc",
    name: "misc",
    component: () => import("@/components/demo/MiscDemo.vue"),
    meta: {
      layout: "demo/DemoLayout",
    },
  },
  {
    path: "/demo/crud",
    name: "crud",
    component: () => import("@/components/demo/CrudDemo.vue"),
    meta: {
      layout: "demo/DemoLayout",
    },
  },
  {
    path: "/demo/calendar",
    name: "calendar",
    component: () => import("@/components/demo/CalendarDemo.vue"),
    meta: {
      layout: "demo/DemoLayout",
    },
  },
  {
    path: "/demo/timeline",
    name: "timeline",
    component: () => import("@/components/demo/TimelineDemo.vue"),
    meta: {
      layout: "demo/DemoLayout",
    },
  },
  {
    path: "/demo/empty",
    name: "empty",
    component: () => import("@/components/demo/EmptyPage.vue"),
    meta: {
      layout: "demo/DemoLayout",
    },
  },
  {
    path: "/demo/documentation",
    name: "documentation",
    component: () => import("@/components/demo/Documentation.vue"),
    meta: {
      layout: "demo/DemoLayout",
    },
  },
  {
    path: "/demo/demo",
    name: "demo",
    component: () => import("@/layouts/demo/Demo.vue"),
    meta: {
      layout: "demo/DemoLayout",
    },
  },
];
