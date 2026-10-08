// ✏️ KỸ NĂNG — mỗi nhóm có tiêu đề, icon và các chip
// Màu chip: "secondary" (xanh cyan) | "primary" (tím) | "tertiary" (xanh lá) | "muted" (xám)

export type Tone = "secondary" | "primary" | "tertiary" | "muted";

export const skillsIntro = {
  label: "Kỹ năng chuyên môn",
  title: "Công nghệ & công cụ",
  desc: "",
};

export const skillGroups: {
  title: string;
  icon: string;
  chips: [string, Tone][];
}[] = [
  {
    title: "SQL & Cơ sở dữ liệu",
    icon: "terminal",
    chips: [
      ["SQL Server", "secondary"],
      ["JOIN", "secondary"],
      ["GROUP BY", "secondary"],
      ["CTE", "muted"],
      ["Window Functions", "muted"],
      ["Subquery", "muted"],
    ],
  },

  {
    title: "Phân tích & Business Intelligence",
    icon: "insights",
    chips: [
      ["Excel", "secondary"],
      ["Power BI", "secondary"],
      ["DAX", "secondary"],
      ["Power Query", "secondary"],
      ["Data Modeling", "muted"],
      ["Star Schema", "muted"],
      ["Data Visualization", "muted"],
    ],
  },

  {
    title: "Python & Machine Learning",
    icon: "code",
    chips: [
      ["Python", "primary"],
      ["Pandas", "primary"],
      ["NumPy", "primary"],
      ["Matplotlib", "muted"],
      ["Scikit-learn", "muted"],
    ],
  },

  {
    title: "Phân tích dữ liệu",
    icon: "target",
    chips: [
      ["Data Cleaning", "tertiary"],
      ["EDA", "tertiary"],
      ["Data Preprocessing", "tertiary"],
      ["Statistical Analysis", "tertiary"],
    ],
  },
];