import type { CaseStudy } from "./types";

export const bankingCasaProject: CaseStudy = {
  chips: [
    ["Power BI", "primary"],
    ["DAX", "primary"],
    ["Power Query", "secondary"],
    ["Excel", "secondary"],
  ],

  title: "Retail Banking Customer Analysis",

  problem:
    "Ngân hàng cần hiểu tệp khách hàng CASA đang hoạt động: họ là ai, giao dịch thế nào, nên chăm sóc nhóm nào. Dữ liệu thô có lỗi định dạng số và giá trị bất thường, nên không thể dùng trực tiếp để phân tích.",

  method:
    "Làm sạch dữ liệu bằng Power Query, dựng mô hình sao gồm bảng dimension và fact, viết hơn 50 measure DAX (legend động bằng USERELATIONSHIP), phân khúc khách hàng bằng điểm RFM dựa trên percentile, và dựng dashboard 3 trang.",

  metrics: [
    ["110K", "Khách hàng phân tích", "text-primary"],
    ["8", "Phân khúc RFM", "text-secondary"],
    ["3", "Trang báo cáo", "text-tertiary"],
  ],

  primaryAction: {
    icon: "code",
    label: "Xem dashboard",
    href: "https://app.powerbi.com/view?r=eyJrIjoiOWY2MDAzNmEtNzBkMC00YTljLTk5NDQtOGU5NzM1NzU5MTdhIiwidCI6IjVlOGIzMjY5LTc2Y2EtNDU3Yy04NDdmLTQ0NGUzZGI5ODZhNyIsImMiOjl9",
  },

  secondaryAction: {
    icon: "description",
    label: "Chi tiết dự án",
    href: "https://github.com/ntrgwb/Banking_Customer_Analysis",
  }, 

    preview: (
    <img
        src="./projects/banking-casa/overview.png"
        alt="Dashboard Customer Overview của dự án Retail Banking Customer Analysis"
        className="w-full h-auto"
    />
    ),
};