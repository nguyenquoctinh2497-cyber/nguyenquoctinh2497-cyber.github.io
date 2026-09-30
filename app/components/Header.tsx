{/* 1. TOP BANNER TO RÕ + HỌA TIẾT VUÔNG BÊN MÉP CHUẨN TRƯỜNG GIANG */}
<div className="bg-gradient-to-r from-gray-100 via-gray-50 to-gray-100 border-b border-gray-200 text-gray-800 py-3.5 px-4 flex justify-between items-center overflow-hidden relative">
  <div className="container mx-auto flex items-center justify-between gap-4 relative z-10">
    
    {/* Họa tiết ô vuông bên trái */}
    <div className="hidden lg:flex items-center gap-1.5 opacity-80 shrink-0">
      <div className="w-4 h-4 bg-amber-500 rounded-sm transform rotate-12"></div>
      <div className="w-5 h-5 bg-orange-500 rounded-sm transform -rotate-6"></div>
      <div className="w-3.5 h-3.5 border-2 border-amber-500 rounded-sm"></div>
    </div>

    {/* Vùng văn bản thông báo khuyến mãi lớn */}
    <div className="flex items-center justify-center gap-3 md:gap-5 flex-1 mx-auto">
      <span className="font-black text-base md:text-xl uppercase tracking-tight text-slate-900">
        GIẢM GIÁ TẤT CẢ CÁC DÒNG <span className="text-red-600 font-black text-xl md:text-2xl">PC & LAPTOP</span>
      </span>

      {/* Dải Voucher màu cam vát chéo */}
      <div className="hidden sm:flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-black text-sm md:text-base uppercase px-5 py-2 rounded-r-full -skew-x-12 shadow-md shrink-0">
        <Gift className="w-5 h-5 skew-x-12 animate-bounce" />
        <span className="skew-x-12 tracking-wide">VOUCHER & HÀNG NGÀN QUÀ TẶNG</span>
      </div>
    </div>

    {/* Họa tiết ô vuông bên phải */}
    <div className="hidden lg:flex items-center gap-1.5 opacity-80 shrink-0">
      <div className="w-3.5 h-3.5 border-2 border-amber-500 rounded-sm"></div>
      <div className="w-5 h-5 bg-orange-500 rounded-sm transform rotate-6"></div>
      <div className="w-4 h-4 bg-amber-500 rounded-sm transform -rotate-12"></div>
    </div>

  </div>
</div>