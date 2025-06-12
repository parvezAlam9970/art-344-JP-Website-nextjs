export const linksData = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About",
    href: "/about",
    children: [
      {
        label: "Profile",
        href: "/about/profile",
        children: [{ label: "Biography", href: "/about/profile/biography" }],
      },
      { label: "Visionary", href: "/about/visionary" },
      { label: "Karyakarta", href: "/about/karyakarta" },
      { label: "Youth Engagements", href: "/about/youth-engagements" },
      { label: "People’s MP", href: "/about/people-mps" },
    ],
  },
  {
    label: "Policy",
    href: "/policy",
    children: [
      { label: "Parliament", href: "/policy/parliament" },
      { label: "Committee", href: "/policy/committee" },
      { label: "Opinion Editorials", href: "/policy/opinion-editorials" },
      { label: "Reads", href: "/policy/reads" },
    ],
  },
  {
    label: "Kendrapara",
    href: "/kendrapara",
    children: [
      { label: "Vision", href: "/kendrapara/development" },
      { label: "MPLAD", href: "/kendrapara/events" },
      { label: "DISHA", href: "/kendrapara/events" },
      { label: "Constituent speaks", href: "/kendrapara/events" },
      { label: "Ask your MP", href: "/kendrapara/events" },
    ],
  },
  {
    label: "Media",
    href: "/media",
    children: [
      { label: "Press Release", href: "/media/photos" },
      { label: "Media Coverage", href: "/media/videos" },
      { label: "Interviews", href: "/media/videos" },
      { label: "Archives", href: "/media/videos" },
      { label: "Gallery", href: "/media/videos" },
    ],
  },
  {
    label: "Contact",
    href: "/contact",
  },
];
