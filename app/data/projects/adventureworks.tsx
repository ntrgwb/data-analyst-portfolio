import type { CaseStudy } from "./types";

export const adventureWorksProject: CaseStudy = {
  chips: [
    ["Power BI", "secondary"],
    ["SQL Server", "secondary"],
    ["DAX", "secondary"],
    ["Power Query", "muted"],
  ],

//   status: "PROD / LIVE",
//   statusTone: "text-tertiary",

  title: "AdventureWorks Sales & Profitability Analysis",

  problem:
    "Doanh thu và lợi nhuận của AdventureWorks đến từ đâu? Phân tích nhằm xác định sản phẩm, khu vực và nhóm khách hàng đóng góp chính vào hiệu quả kinh doanh.",

  method:
    "Truy vấn và xử lý hơn 60.000 dòng dữ liệu bằng SQL Server, xây dựng Star Schema và DAX measures, sau đó trực quan hóa các KPI và xu hướng kinh doanh trên Power BI.",

  metrics: [
    ["$29.36M", "Doanh thu", "text-tertiary"],
    ["$12.08M", "Lợi nhuận", "text-secondary"],
    ["41.15%", "Biên lợi nhuận", "text-primary"],
  ],

  primaryAction: {
    icon: "bar_chart",
    label: "Xem Dashboard tương tác",
    href: "https://app.powerbi.com/groups/me/reports/6676ece4-10c8-47bc-bf1e-80e5025a83ae/367b62cd55d1d1684c0a?experience=power-bi",
  },

  secondaryAction: {
    icon: "code",
    label: "Chi tiết dự án",
    href: "https://github.com/ntrgwb/AdventureWorks-Sales-Analysis#1-t%E1%BB%95ng-quan-d%E1%BB%B1-%C3%A1n",
    external: true,
  },

  preview: (
    <img
      src="./projects/adventureworks/Executive_Overview.png"
      alt="AdventureWorks Sales & Profitability Dashboard"
      className="w-full h-auto rounded-[2px]"
    />
  ),
};