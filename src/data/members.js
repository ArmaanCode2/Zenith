export const membersData = [
  {
    id: "member-01",
    name: "Mayank goyal",
    role: "Student Coordinator",
    group: "Coordinator",
    image: "/team/mayank.jpg",
    featured: true
  },
  {
    id: "member-04",
    name: "Mohit sony",
    role: "Marketing Manager",
    group: "Marketing",
    image: "/team/mohit.png",
    featured: false
  },
  {
    id: "member-05",
    name: "Rahul uppal",
    role: "Member executive",
    group: "Executives",
    image: "/team/rahul.jpg",
    featured: false
  },
  {
    id: "member-06",
    name: "Samar beerbansal",
    role: "Member executive",
    group: "Executives",
    image: "/team/sameer.jpg",
    featured: false
  },
  {
    id: "member-07",
    name: "Isha",
    role: "Member executive",
    group: "Executives",
    image: "/team/isha.png",
    featured: false
  },
  {
    id: "member-08",
    name: "Armaan",
    role: "Member executive",
    group: "Executives",
    image: "/team/armaan.png",
    featured: false
  },
  {
    id: "member-09",
    name: "Nomya",
    role: "Member executive",
    group: "Executives",
    image: "/team/nomya.png",
    featured: false
  },
  {
    id: "member-10",
    name: "Vaidant jindal",
    role: "Member executive",
    group: "Executives",
    image: "/team/vaidant.jpg",
    featured: false
  },
];

export const getAllMembers = () => membersData;

export const getFeaturedMembers = () => membersData.filter(m => m.featured);

export const getGroupedMembers = () => {
  const groups = {};
  membersData.forEach(member => {
    const groupName = member.group || 'Members';
    if (!groups[groupName]) {
      groups[groupName] = [];
    }
    groups[groupName].push(member);
  });
  return groups;
};
