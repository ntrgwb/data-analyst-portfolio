import type { CaseStudy } from "./types";

export const adventureWorksProject: CaseStudy = {
  chips: [
    ["Power BI", "secondary"],
    ["SQL Server", "secondary"],
    ["DAX", "secondary"],
    ["Power Query", "muted"],
  ],

  status: "PROD / LIVE",
  statusTone: "text-tertiary",

  title: "AdventureWorks Sales & Profitability Analysis",

  problem:
    "Phân tích hiệu suất bán hàng của AdventureWorks nhằm đánh giá doanh thu, lợi nhuận, sản phẩm, khu vực và phân khúc khách hàng, từ đó xác định các yếu tố đóng góp chính vào kết quả kinh doanh.",

  method:
    "Truy vấn và xử lý hơn 60.000 dòng dữ liệu từ AdventureWorksDW2019 bằng SQL Server, xây dựng mô hình Star Schema và các DAX measures trong Power BI để phân tích doanh thu, lợi nhuận, tăng trưởng và hành vi khách hàng.",

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
    label: "Mã SQL trên GitHub",
    href: "https://github.com/ntrgwb/AdventureWorks-Sales-Analysis/blob/main/Sql/data_preparation.sql",
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