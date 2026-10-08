// ✏️ CASE STUDY — mỗi phần tử trong mảng là 1 dự án
// Muốn bớt dự án: xóa 1 khối { ... } trong mảng caseStudies.
import type { ReactNode } from "react";
import type { Tone } from "./skills";

export const projectsIntro = {
  label: "Sản phẩm thực tế",
  title: "Case study nổi bật",
  desc: "Một số dự án tôi thực hiện để áp dụng SQL, Power BI và Python vào quá trình xử lý, phân tích và trực quan hóa dữ liệu.",
};

export type CaseStudy = {
  chips: [string, Tone][];
  status: string;
  statusTone: string;
  title: string;
  problem: string;
  method: string;
  metrics: [string, string, string][]; // value, label, colorClass
  primaryAction: { icon: string; label: string; href: string };
  secondaryAction: { icon: string; label: string; href: string; external?: boolean };
  preview: ReactNode;
};

export const caseStudies: CaseStudy[] = [
  {
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
    src="/projects/adventureworks/Executive_Overview.png"
    alt="AdventureWorks Sales & Profitability Dashboard"
    className="w-full h-auto rounded-[2px]"
    />
),
    

  },
  {
    chips: [
      ["SQL", "secondary"],
      ["Python", "primary"],
      ["Snowflake", "secondary"],
      ["Dashboard thời gian thực", "muted"],
    ],
    status: "FINTECH",
    statusTone: "text-secondary",
    title: "Phát hiện gian lận & bất thường trong giao dịch Fintech",
    problem:
      "Tỷ lệ dương tính giả cao (44%) trong hàng đợi giám sát tuân thủ, khiến điều tra viên quá tải và gây chậm trễ thanh toán.",
    method:
      "Phát triển các window function SQL tùy chỉnh với ngưỡng ngoại lai IQR, tính trên phân phối cơ sở 30 ngày trượt của từng tài khoản trong Snowflake, giúp giảm hàng đợi cảnh báo thủ công.",
    metrics: [
      ["-60%", "Thời gian rà soát", "text-tertiary"],
      ["+22%", "Độ chính xác bắt gian lận", "text-secondary"],
      ["<350ms", "SLA thực thi truy vấn", "text-primary"],
    ],
    primaryAction: {
      icon: "play_arrow",
      label: "Demo trực tiếp",
      href: "#live-demo",
    },
    secondaryAction: {
      icon: "menu_book",
      label: "Tài liệu",
      href: "#documentation",
    },
    preview: (
      <>
        <div className="flex items-center justify-between pb-2 border-b border-outline-variant/20">
          <span className="text-on-surface-variant">
            snowflake_anomaly_iqr.sql
          </span>
          <span className="text-secondary text-[10px]">
            Warehouse: WH_ANALYTICS_L
          </span>
        </div>
        <div className="p-3 bg-surface-container rounded-[2px] space-y-1 text-[11px] leading-relaxed text-on-surface-variant overflow-x-auto">
          <div className="text-outline-variant">
            -- Tính toán cửa sổ IQR trên đường cơ sở trượt
          </div>
          <div>
            <span className="text-secondary">SELECT</span> tx_id, user_id,
            amount,
          </div>
          <div className="pl-4">
            <span className="text-primary">PERCENTILE_CONT</span>(
            <span className="text-tertiary">0.75</span>){" "}
            <span className="text-secondary">WITHIN GROUP</span>
          </div>
          <div className="pl-4">
            (<span className="text-secondary">ORDER BY</span> amount){" "}
            <span className="text-secondary">OVER</span> (PARTITION BY user_id){" "}
            <span className="text-secondary">AS</span> q3,
          </div>
          <div className="pl-4">
            <span className="text-secondary">CASE WHEN</span> amount &gt; (q3 +{" "}
            <span className="text-tertiary">1.5</span> * iqr)
          </div>
          <div className="pl-4">
            <span className="text-secondary">THEN</span>{" "}
            <span className="text-error">{"'SUSPECT_ANOMALY'"}</span>{" "}
            <span className="text-secondary">ELSE</span>{" "}
            <span className="text-tertiary">{"'CLEARED'"}</span>{" "}
            <span className="text-secondary">END</span>
          </div>
        </div>
        <div className="p-3 bg-surface-container rounded-[2px] space-y-2">
          <div className="flex justify-between text-[11px]">
            <span className="text-on-surface-variant">
              Tỷ lệ lọc của pipeline trực tiếp
            </span>
            <span className="text-tertiary">98.2% tự động xử lý</span>
          </div>
          <div className="w-full bg-surface-container-highest rounded-full h-1.5 overflow-hidden">
            <div className="bg-linear-to-r from-secondary to-tertiary h-full w-[98%]"></div>
          </div>
        </div>
      </>
    ),
  },
];
