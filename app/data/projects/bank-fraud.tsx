import type { CaseStudy } from "./types";

export const bankFraudProject: CaseStudy = {
  chips: [
    ["Python", "primary"],
    ["Pandas", "primary"],
    ["Scikit-learn", "secondary"],
    ["XGBoost", "secondary"],
  ],

  status: "BANKING / FRAUD ANALYTICS",
  statusTone: "text-secondary",

  title: "Bank Account Fraud Detection",

  problem:
    "Fraud chỉ chiếm khoảng 1.1% trong 1 triệu hồ sơ, tạo ra bài toán mất cân bằng lớp nghiêm trọng. Mục tiêu là phát hiện các hồ sơ có nguy cơ gian lận trong khi kiểm soát số lượng cảnh báo sai.",

  method:
    "Thực hiện Data Cleaning, EDA và Preprocessing; áp dụng One-Hot Encoding và xử lý mất cân bằng lớp. So sánh Logistic Regression, Random Forest và XGBoost, sau đó điều chỉnh classification threshold dựa trên Precision–Recall trade-off.",

  metrics: [
    ["0.894", "Test ROC-AUC", "text-tertiary"],
    ["0.176", "Test PR-AUC", "text-secondary"],
    ["0.238", "Best Validation F1", "text-primary"],
  ],

  primaryAction: {
    icon: "code",
    label: "Xem trên GitHub",
    href: "",
  },

  secondaryAction: {
    icon: "description",
    label: "Chi tiết dự án",
    href: "https://github.com/ntrgwb/Bank_Fraud_Detection",
  },

  preview: (
    <>
      <div className="flex items-center justify-between pb-2 border-b border-outline-variant/20">
        <span className="text-on-surface-variant">
          xgboost_fraud_detection.py
        </span>

        <span className="text-secondary text-[10px]">
          XGBoost
        </span>
      </div>

      <div className="p-3 bg-surface-container rounded-[2px] space-y-1 text-[11px] leading-relaxed text-on-surface-variant overflow-x-auto">
        <div className="text-outline-variant">
          # Predict fraud probability
        </div>

        <div>
          xgb_test_prob = xgb_model.predict_proba(X_test)[:, 1]
        </div>

        <div className="pt-2">
          threshold = <span className="text-tertiary">0.89</span>
        </div>

        <div>
          xgb_test_pred = (
        </div>

        <div className="pl-4">
          xgb_test_prob &gt;= threshold
        </div>

        <div>
          ).astype(int)
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div className="p-3 bg-surface-container rounded-[2px]">
          <div className="text-[10px] text-on-surface-variant uppercase">
            Best Model
          </div>

          <div className="text-secondary font-semibold mt-1">
            XGBoost
          </div>
        </div>

        <div className="p-3 bg-surface-container rounded-[2px]">
          <div className="text-[10px] text-on-surface-variant uppercase">
            ROC-AUC
          </div>

          <div className="text-tertiary font-semibold mt-1">
            0.894
          </div>
        </div>
      </div>
    </>
  ),
};