import {
  IconBroadcast,
  IconDashboard,
  IconHelp,
  IconListDetails,
  IconSettings,
  IconTools,
  IconUsers,
} from "@tabler/icons-react";

export const data = {
  navMain: {
    admin: [
      {
        title: "لوحة التحكم",
        url: "/school",
        icon: IconDashboard,
      },
      {
        title: "الدروس",
        url: "/school/courses",
        icon: IconListDetails,
      },
      {
        title: "التلاميذ",
        url: "/school/students",
        icon: IconUsers,
      },
      {
        title: "التمارين",
        url: "/school/exercises",
        icon: IconTools,
      },
      {
        title: "البثوث السابقة",
        url: "/school/past-broadcasts",
        icon: IconBroadcast,
      },
    ],
    student: [
      {
        title: "لوحة التحكم",
        url: "/school",
        icon: IconDashboard,
      },
      {
        title: "الدروس",
        url: "/school/courses",
        icon: IconListDetails,
      },
      {
        title: "التمارين",
        url: "/school/exercises",
        icon: IconTools,
      },
      {
        title: "البثوث السابقة",
        url: "/school/past-broadcasts",
        icon: IconBroadcast,
      },
    ],
    guest: [],
    teacher: [],
  },
  navSecondary: [
    {
      title: "الإعدادات",
      url: "#",
      icon: IconSettings,
    },
    {
      title: "الحصول على المساعدة",
      url: "#",
      icon: IconHelp,
    },
  ],
};
