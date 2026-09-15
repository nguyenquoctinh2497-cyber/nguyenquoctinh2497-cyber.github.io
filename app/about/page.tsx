import React from "react";
import Header from "../components/Header";
import { ShieldCheck, Truck, Headphones, Award, Store, Users } from "lucide-react";

export default function AboutPage() {
  const highlights = [
    {
      icon: ShieldCheck,
      title: "100% Chính Hãng",
      desc: "Cam kết sản phẩm linh kiện PC, Laptop nhập khẩu chính hãng đầy đủ CO/CQ.",
    },
    {
      icon: Truck,
      title: "Giao Hàng Siêu Tốc",
      desc: "Giao hàng tận nơi miễn phí trong nội thành Hà Nội & TP.HCM chỉ trong 2 giờ.",
    },
    {
      icon: Headphones,
      title: "Hỗ Trợ 24/7",
      desc: "Đội ngũ kỹ thuật viên giàu kinh nghiệm sẵn sàng giải đáp thắc mắc mọi lúc.",
    },
    {
      icon: Award,
      title: "Bảo Hành Đột Phá",
      desc: "Chính sách 1 đổi 1 trong 30 ngày đầu tiên nếu phát sinh lỗi từ nhà sản xuất.",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-100 text-gray-900 pb-10">
      <Header />
      <div className="max-w-7xl mx-auto px-4 py-8">
        
        {/* Banner Giới thiệu */}
        <div className="bg-gradient-to-r from-red-600 to-red-500 rounded-2xl p-8 text-white mb-8 shadow-md text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-2xl">
            <span className="bg-yellow-400 text-red-900 font-extrabold text-xs px-3 py-1 rounded-full uppercase tracking-wider">
              Về Chúng Tôi
            </span>
            <h1 className="text-3xl font-black mt-3 leading-tight">
              TĨNH COMPUTER - HỆ THỐNG BÁN LẺ MÁY TÍNH HÀNG ĐẦU
            </h1>
            <p className="text-red-100 text-sm mt-3 leading-relaxed">
              Thành lập với sứ mệnh mang lại các giải pháp công nghệ tối ưu, Tĩnh Computer tự hào là điểm đến tin cậy chuyên cung cấp các sản phẩm Laptop, PC Gaming, linh kiện máy tính và thiết bị công nghệ chính hãng với giá thành cạnh tranh nhất.
            </p>
          </div>
          <div className="bg-white/10 border border-white/20 backdrop-blur-md p-6 rounded-2xl text-center shrink-0">
            <div className="text-4xl font-black text-yellow-300">10+</div>
            <div className="text-xs text-red-100 font-semibold mt-1">Năm Kinh Nghiệm</div>
          </div>
        </div>

        {/* Lý do chọn Tĩnh Computer */}
        <div className="mb-10">
          <h2 className="text-xl font-bold uppercase text-red-600 mb-6 flex items-center gap-2 border-b border-gray-200 pb-3">
            <Store className="text-red-600" /> TẠI SAO CHỌN TĨNH COMPUTER?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm hover:shadow-md transition">
                  <div className="bg-red-50 text-red-600 p-3 rounded-lg w-fit mb-4">
                    <Icon size={28} />
                  </div>
                  <h3 className="font-bold text-gray-800 text-base mb-2">{item.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Định hướng & Tầm nhìn */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <h3 className="text-lg font-bold text-gray-800 mb-3 border-l-4 border-red-600 pl-3">
              TẦM NHÌN TƯƠNG LAI
            </h3>
            <p className="text-gray-600 text-xs leading-relaxed">
              Tĩnh Computer hướng tới trở thành chuỗi bán lẻ thiết bị công nghệ và giải pháp máy tính số 1 tại Việt Nam. Không ngừng mở rộng hệ thống showroom và nâng cao chất lượng dịch vụ hậu mãi nhằm tạo ra trải nghiệm mua sắm tuyệt vời nhất cho khách hàng.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <h3 className="text-lg font-bold text-gray-800 mb-3 border-l-4 border-red-600 pl-3">
              CAM KẾT VỚI KHÁCH HÀNG
            </h3>
            <p className="text-gray-600 text-xs leading-relaxed">
              Chúng tôi cam kết luôn đặt quyền lợi của khách hàng lên hàng đầu. Luôn trung thực trong thông số kỹ thuật, giá cả minh bạch, hỗ trợ đổi trả nhanh chóng và xử lý sự cố kỹ thuật tận tâm trong suốt quá trình sử dụng sản phẩm.
            </p>
          </div>
        </div>

      </div>
    </main>
  );
}