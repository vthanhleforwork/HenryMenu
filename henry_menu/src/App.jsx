import { useState, useMemo } from "react";

const menuData = [
  // NƯỚC MÍA
  { id: 1, name: "Nước Mía Nguyên Chất", price: 10000, category: "nuocmia" },
  { id: 2, name: "Nước Mía Tắc", price: 12000, category: "nuocmia" },
  { id: 3, name: "Nước Mía Thơm Tắc", price: 10000, category: "nuocmia" },
  { id: 4, name: "Nước Mía Chanh Dây", price: 14000, category: "nuocmia" },
  { id: 5, name: "Nước Mía Cam", price: 14000, category: "nuocmia" },
  { id: 6, name: "Nước Mía Chanh Muối", price: 14000, category: "nuocmia" },
  { id: 7, name: "Nước Mía Đào Dầm", price: 14000, category: "nuocmia" },
  { id: 8, name: "Nước Mía Vải Dầm", price: 14000, category: "nuocmia" },
  { id: 9, name: "Nước Mía Dâu Tây", price: 17000, category: "nuocmia" },
  // RAU MÁ
  { id: 10, name: "Rau Má Nguyên Chất", price: 10000, category: "rauma" },
  { id: 11, name: "Rau Má Đậu Xanh", price: 12000, category: "rauma" },
  { id: 12, name: "Rau Má Sữa Đặc", price: 14000, category: "rauma" },
  { id: 14, name: "Rau Má Đậu Xanh Sữa Dừa", price: 14000, category: "rauma" },
  { id: 15, name: "Rau Má Đậu Xanh Sữa Đặc", price: 16000, category: "rauma" },
  { id: 16, name: "Sữa Dừa Đậu Xanh", price: 16000, category: "rauma" },
  // CAM
  { id: 17, name: "Cam Vắt", price: 15000, category: "camvat" },
  { id: 18, name: "Cam Vắt Mật Ong", price: 16000, category: "camvat" },
  { id: 19, name: "Cam Sữa", price: 20000, category: "camvat" },
  { id: 20, name: "Cam Mix Chanh Dây", price: 19000, category: "camvat" },
  { id: 21, name: "Cam Mix Chanh Muối", price: 19000, category: "camvat" },
  { id: 22, name: "Cam Mix Đào Dầm", price: 22000, category: "camvat" },
  { id: 23, name: "Cam Mix Vải Dầm", price: 22000, category: "camvat" },
  { id: 24, name: "Cam Mix Dâu Tây", price: 22000, category: "camvat" },
  // CHANH
  { id: 25, name: "Chanh Tươi Vắt", price: 14000, category: "chanhtuoi" },
  { id: 26, name: "Chanh Dây", price: 14000, category: "chanhtuoi" },
  { id: 27, name: "Chanh Dây Mật Ong", price: 15000, category: "chanhtuoi" },
  { id: 28, name: "Chanh Muối", price: 14000, category: "chanhtuoi" },
  { id: 29, name: "Chanh Dây Sữa", price: 19000, category: "chanhtuoi" },
  { id: 30, name: "Chanh Mật Ong", price: 14000, category: "chanhtuoi" },
  { id: 31, name: "Đá Me Rim Thơm", price: 15000, category: "chanhtuoi" },
  { id: 32, name: "Tắc Xi Muội Rim Thơm", price: 15000, category: "chanhtuoi" },
  // TRÀ
  { id: 33, name: "Trà Tắc", price: 10000, category: "tra" },
  { id: 34, name: "Trà Chanh Mật Ong", price: 10000, category: "tra" },
  { id: 35, name: "Trà Chanh Nhài Mật Ong", price: 10000, category: "tra" },
  { id: 37, name: "Trà Bí Đào Hạt Chia", price: 10000, category: "tra" },
  { id: 38, name: "Hồng Trà Bí Đào", price: 10000, category: "tra" },
  { id: 40, name: "Hồng Trà Tắc Mật Ong", price: 10000, category: "tra" },
  { id: 41, name: "Trà Lài Tắc Mật Ong", price: 10000, category: "tra" },
  //Trà.1
  { id: 42, name: "Trà Mẵng Cầu", price: 22000, category: "tra" },
  { id: 43, name: "Trà Dâu Tây (Có Trái Cây)", price: 22000, category: "tra" },
  { id: 44, name: "Trà Mẵng Cầu Chanh Dây", price: 25000, category: "tra" },
  { id: 45, name: "Trà Mẵng Cầu Dâu Tây Tươi", price: 26000, category: "tra" },
  //Trà.2
  { id: 46, name: "Trà Chanh Dây", price: 18000, category: "tra" },
  { id: 47, name: "Trà Me", price: 18000, category: "tra" },
  { id: 48, name: "Trà Ổi Hồng", price: 18000, category: "tra" },
  { id: 49, name: "Trà Xoài", price: 18000, category: "tra" },
  { id: 50, name: "Trà Xoài Chanh Dây", price: 20000, category: "tra" },
  { id: 51, name: "Trà Cốt Dâu Tây", price: 20000, category: "tra" },
  { id: 52, name: "Trà Đào Dầm", price: 20000, category: "tra" },
  { id: 53, name: "Trà Vải Dầm", price: 20000, category: "tra" },
  { id: 531, name: "Nước dâu tây", price: 20000, category: "tra" },
  // SỮA TƯƠI
  { id: 54, name: "Sữa Tươi Chanh Dây", price: 25000, category: "suatuoi" },
  { id: 55, name: "Sữa Tươi Ổi Hồng", price: 25000, category: "suatuoi" },
  { id: 56, name: "Sữa Tươi Xoài", price: 25000, category: "suatuoi" },
  { id: 57, name: "Sữa Tươi Dưa Lưới Xanh", price: 25000, category: "suatuoi" },
  { id: 58, name: "Sữa Tươi Bưởi Hồng", price: 25000, category: "suatuoi" },
  { id: 59, name: "Sữa Tươi Lựu", price: 25000, category: "suatuoi" },
  { id: 591, name: "Sữa Tươi Kiwi", price: 25000, category: "suatuoi" },
  { id: 592, name: "Sữa Tươi Việt Quất", price: 25000, category: "suatuoi" },
  { id: 60, name: "Sữa Tươi Vải", price: 25000, category: "suatuoi" },
  { id: 601, name: "Sữa Tươi Đào", price: 25000, category: "suatuoi" },
  { id: 61, name: "Sữa Tươi Mãng Cầu", price: 27000, category: "suatuoi" },
  { id: 62, name: "Sữa Tươi Dâu Tây (Cốt Dâu)", price: 27000, category: "suatuoi" },
  { id: 63, name: "Sữa Tươi Dâu Tây (Có Trái Dâu)", price: 27000, category: "suatuoi" },
  // SỮA CHUA
  { id: 64, name: "Sữa Chua Chanh Dây", price: 25000, category: "suachua" },
  { id: 641, name: "Sữa Tươi Ổi Hồng", price: 25000, category: "suachua" },
  { id: 65, name: "Sữa Chua Xoài", price: 25000, category: "suachua" },
  { id: 66, name: "Sữa Chua Dưa Lưới Xanh", price: 25000, category: "suachua" },
  { id: 67, name: "Sữa Chua Lựu", price: 25000, category: "suachua" },
  { id: 68, name: "Sữa Chua Bưởi Hồng", price: 25000, category: "suachua" },
  { id: 681, name: "Sữa Chua Việt Quất", price: 25000, category: "suachua" },
  { id: 69, name: "Sữa Chua Dâu Tây (Cốt Dâu)", price: 27000, category: "suachua" },
  { id: 70, name: "Sữa Chua Kiwi", price: 25000, category: "suachua" },
  { id: 71, name: "Sữa Chua Dâu Tây (Có Trái Cây)", price: 27000, category: "suachua" },
  // CÀ PHÊ
  { id: 73, name: "Cà Phê Đen", price: 12000, category: "cafe" },
  { id: 74, name: "Bạc Sỉu", price: 15000, category: "cafe" },
  { id: 75, name: "Cà Phê Sữa Tươi", price: 15000, category: "cafe" },
  { id: 755, name: "Cà Phê Sữa Dừa", price: 18000, category: "cafe" },
  { id: 76, name: "Cà Phê Sữa Phô Mai", price: 20000, category: "cafe" },
  { id: 77, name: "Cà Phê Sữa Đặc", price: 15000, category: "cafe" },
  { id: 78, name: "Cacao Sữa Tươi", price: 15000, category: "cafe" },
  { id: 771, name: "Cacao Sữa Đặc", price: 18000, category: "cafe" },
  { id: 79, name: "Cacao Sữa Dừa", price: 18000, category: "cafe" },
  { id: 80, name: "Cacao Sữa Phô Mai", price: 20000, category: "cafe" },
  { id: 81, name: "Cà Phê Sữa Kem Muối", price: 18000, category: "cafe" },
  { id: 82, name: "Cà Phê Sữa Dừa Kem Muối", price: 20000, category: "cafe" },
  { id: 83, name: "Cà Phê Đen Kem Muối", price: 18000, category: "cafe" },
  { id: 84, name: "Cacao Sữa Dừa Kem Muối", price: 20000, category: "cafe" },
  // MATCHA
  { id: 104, name: "Matcha Latte Dâu", price: 20000, category: "matcha" },
  { id: 1041, name: "Matcha Latte", price: 17000, category: "matcha" },
  { id: 1042, name: "Matcha Latte Cà Phê", price: 17000, category: "matcha" },
  { id: 105, name: "Matcha Latte Đào", price: 20000, category: "matcha" },
  { id: 106, name: "Matcha Latte Xoài", price: 20000, category: "matcha" },
  { id: 107, name: "Matcha Latte Ổi Hồng", price: 20000, category: "matcha" },
  { id: 108, name: "Matcha Latte Việt Quất", price: 20000, category: "matcha" },
  { id: 109, name: "Matcha Phô Mai", price: 20000, category: "matcha" },
  { id: 1091, name: "Matcha Sữa Dừa", price: 20000, category: "matcha" },
  { id: 110, name: "Matcha Phô Mai Cà Phê", price: 20000, category: "matcha" },
  { id: 111, name: "Matcha Kem Muối", price: 20000, category: "matcha" },
  { id: 112, name: "Matcha Cà Phê Kem Muối", price: 20000, category: "matcha" },
  { id: 113, name: "Matcha Đào Kem Muối", price: 23000, category: "matcha" },
  { id: 1131, name: "Matcha Dâu Kem Muối", price: 23000, category: "matcha" },
  { id: 114, name: "Matcha Xoài Kem Muối", price: 23000, category: "matcha" },
  { id: 115, name: "Matcha Ổi Hồng Kem Muối", price: 23000, category: "matcha" },
  { id: 116, name: "Matcha Việt Quất Kem Muối", price: 23000, category: "matcha" },
  { id: 117, name: "Matcha Sữa Dừa Kem Muối", price: 23000, category: "matcha" },
  // SODA
  { id: 118, name: "Soda Bạc Hà", price: 12000, category: "soda" },
  { id: 119, name: "Soda Dâu", price: 12000, category: "soda" },
  { id: 120, name: "Soda Dưa Lưới", price: 12000, category: "soda" },
  { id: 121, name: "Soda Việt Quất", price: 12000, category: "soda" },
  { id: 122, name: "Soda Chanh", price: 12000, category: "soda" },
  { id: 123, name: "Soda Hoa Hồng", price: 12000, category: "soda" },
  // ĐÁ BÀO
  { id: 124, name: "Siro Đá Bào Dâu", price: 20000, category: "dabao" },
  { id: 125, name: "Siro Đá Bào Bạc Hà", price: 20000, category: "dabao" },
  { id: 126, name: "Siro Đá Bào Việt Quất", price: 20000, category: "dabao" },
  { id: 127, name: "Siro Đá Bào Kiwi", price: 20000, category: "dabao" },
  { id: 128, name: "Siro Đá Bào Cam", price: 20000, category: "dabao" },
  { id: 129, name: "Siro Đá Bào Nho", price: 20000, category: "dabao" },
  { id: 130, name: "Siro Đá Bào Chanh Dây", price: 20000, category: "dabao" },
  { id: 131, name: "Siro Đá Bào Xoài", price: 20000, category: "dabao" },
  { id: 132, name: "Siro Đá Bào Ổi", price: 20000, category: "dabao" },
  { id: 133, name: "Siro Đá Bào Tảo Xanh", price: 20000, category: "dabao" },
  { id: 134, name: "Siro Đá Bào Măng Cụt", price: 20000, category: "dabao" },
  // SÂM DỨA
  { id: 85, name: "Sâm Dứa Sữa", price: 15000, category: "samdua" },
  { id: 851, name: "Sâm Dứa Sữa Dừa", price: 18000, category: "samdua" },
  { id: 86, name: "Sâm Dứa Sữa Cà Phê", price: 15000, category: "samdua" },
  { id: 87, name: "Sâm Dứa Sữa Dừa Cà Phê", price: 18000, category: "samdua" },
  { id: 88, name: "Sâm Dứa Sữa Phô Mai", price: 20000, category: "samdua" },
  { id: 882, name: "Sâm Dứa Cà Phê Phô Mai", price: 20000, category: "samdua" },
  { id: 89, name: "Sâm Dứa Sữa Kem Muối", price: 18000, category: "samdua" },
  { id: 90, name: "Sâm Dứa Sữa Cà Phê Kem Muối", price: 18000, category: "samdua" },
  { id: 91, name: "Sâm Dứa Dừa Kem Muối", price: 20000, category: "samdua" },
  { id: 92, name: "Sâm Dứa Sữa Dừa Cà Phê Kem Muối", price: 20000, category: "samdua" },
  // PANNACOTTA
  { id: 93, name: "Panacotta Dâu", price: 8000, category: "panacotta" },
  { id: 94, name: "Panacotta Đào", price: 8000, category: "panacotta" },
  { id: 95, name: "Panacotta Xoài", price: 8000, category: "panacotta" },
  { id: 96, name: "Panacotta Ổi Hồng", price: 8000, category: "panacotta" },
  { id: 97, name: "Panacotta Chanh Dây", price: 8000, category: "panacotta" },
  { id: 98, name: "Panacotta Kiwi", price: 8000, category: "panacotta" },
  { id: 99, name: "Panacotta Lựu", price: 8000, category: "panacotta" },
  { id: 100, name: "Panacotta Bưởi Hồng", price: 8000, category: "panacotta" },
  { id: 101, name: "Panacotta Việt Quất", price: 8000, category: "panacotta" },
  { id: 1011, name: "Panacotta Vải", price: 8000, category: "panacotta" },
  { id: 102, name: "Panacotta Mãng Cầu", price: 8000, category: "panacotta" },
  { id: 103, name: "Panacotta Dừa Lưới Xanh", price: 8000, category: "panacotta" },
  // KHÁC
  { id: 200, name: "Trân Châu Trắng 3Q", price: 3000, category: "khac" },
  { id: 201, name: "Trân Châu Đen 3Q", price: 3000, category: "khac" },
  { id: 202, name: "Thạch Trái Cây", price: 3000, category: "khac" },
  { id: 203, name: "Hạt Thủy Tinh Yaourt", price: 6000, category: "khac" },
  { id: 204, name: "Đậu Phộng Thêm", price: 4000, category: "khac" },
  { id: 205, name: "Mứt Đu Đủ", price: 4000, category: "khac" },
  { id: 207, name: "Chùm Ruột", price: 5000, category: "khac" },
  { id: 208, name: "Chuối Khô Sấy Dẻo", price: 5000, category: "khac" },
  { id: 206, name: "Đào Miếng", price: 5000, category: "khac" },
  { id: 209, name: "Vải Miếng", price: 5000, category: "khac" },
  { id: 210, name: "Mứt Dâu Thêm", price: 6000, category: "khac" },
  { id: 211, name: "Sữa Đặc Thêm", price: 3000, category: "khac" },
  { id: 212, name: "Trái Dâu Tươi Thêm", price: 15000, category: "khac" },
  { id: 213, name: "Miếng Phô Mai Thêm", price: 5000, category: "khac" },
  { id: 2131, name: "Hũ kem muối thêm Thêm", price: 4000, category: "khac" },
  { id: 2132, name: "Sữa tươi không đường", price: 3000, category: "khac" },
  { id: 214, name: "Ly Đá Bi", price: 2000, category: "khac" },
  { id: 2141, name: "Ly Đá Bào", price: 2000, category: "khac" },
  { id: 2141, name: "Mẵng cầu thêm", price: 15000, category: "khac" },
  { id: 215, name: "Hộp Sữa Gấu Nestle", price: 15000, category: "khac" },
  { id: 216, name: "Nước Suối Aquafina 0.5L", price: 5000, category: "khac" },
  { id: 217, name: "Nước Suối Aquafina 1.5L", price: 10000, category: "khac" },
];

const categories = [
  { id: "all",       label: "Tất Cả" },
  { id: "nuocmia",   label: "Nước Mía" },
  { id: "rauma",     label: "Rau Má" },
  { id: "camvat",    label: "Cam Vắt" },
  { id: "chanhtuoi", label: "Chanh Tươi" },
  { id: "tra",       label: "Trà" },
  { id: "cafe",      label: "Cà Phê" },
  { id: "suatuoi",   label: "Sữa Tươi" },
  { id: "suachua",   label: "Sữa Chua" },
  { id: "matcha",    label: "Matcha" },
  { id: "soda",      label: "Soda" },
  { id: "dabao",     label: "Đá Bào" },
  { id: "samdua",    label: "Sâm Dứa" },
  { id: "panacotta", label: "Panacotta" },
  { id: "khac",      label: "Topping" },
];

const fmt = (n) => n.toLocaleString("vi-VN") + "đ";

export default function App() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [cart, setCart] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  const suggestions = useMemo(() => {
    if (!search.trim()) return [];
    const q = search.toLowerCase();
    return menuData.filter((i) => i.name.toLowerCase().includes(q)).slice(0, 7);
  }, [search]);

  const displayItems = useMemo(() => {
    let items = menuData;
    if (activeCategory !== "all") items = items.filter((i) => i.category === activeCategory);
    if (search.trim()) {
      const q = search.toLowerCase();
      items = items.filter((i) => i.name.toLowerCase().includes(q));
    }
    return items;
  }, [activeCategory, search]);

  const addToCart = (item) => {
    setCart((prev) => {
      const ex = prev.find((c) => c.id === item.id);
      if (ex) return prev.map((c) => c.id === item.id ? { ...c, qty: c.qty + 1 } : c);
      return [...prev, { ...item, qty: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCart((prev) => {
      const ex = prev.find((c) => c.id === id);
      if (ex.qty === 1) return prev.filter((c) => c.id !== id);
      return prev.map((c) => c.id === id ? { ...c, qty: c.qty - 1 } : c);
    });
  };

  const total = cart.reduce((s, c) => s + c.price * c.qty, 0);
  const totalItems = cart.reduce((s, c) => s + c.qty, 0);

  return (
    <div style={{
      minHeight: "100vh",
      background: "#ffffff",
      color: "#111",
      fontFamily: "'Roboto', sans-serif",
      paddingBottom: cartOpen ? 380 : totalItems > 0 ? 88 : 40,
    }}>

      {/* TOP RULE */}
      <div style={{ height: 3, background: "#111" }} />

      {/* HEADER */}
      <div style={{ padding: "28px 20px 24px", borderBottom: "1px solid #e8e8e8", background: "#fafafa" }}>
        <div style={{
          fontSize: 10, letterSpacing: 5, color: "#999",
          textTransform: "uppercase", marginBottom: 12,
          fontFamily: "'Roboto', sans-serif", fontWeight: 500,
        }}>
          Thực Đơn · Nước Mía Henry
        </div>
        <h1 style={{
          margin: 0, fontSize: 32, fontWeight: 600,
          letterSpacing: -0.5, color: "#111",
          marginBottom: 12,
        }}>
          Menu Đồ Uống
        </h1>
        <div style={{
          fontSize: 12, color: "#aaa", marginTop: 8,
          fontFamily: "'Roboto', sans-serif", letterSpacing: 1,
          display: "flex", alignItems: "center", gap: "8px",
        }}>
          <span>☎</span> 0909 779 170
        </div>
      </div>

      {/* SEARCH */}
      <div style={{ padding: "20px 20px 0", position: "relative", zIndex: 100 }}>
        <div style={{ position: "relative" }}>
          <input
            value={search}
            onChange={(e) => { setSearch(e.target.value); setShowSuggestions(true); }}
            onFocus={(e) => { 
              setShowSuggestions(true);
              e.target.style.borderColor = "#111"; 
              e.target.style.background = "#fff"; 
            }}
            onBlur={(e) => { 
              e.target.style.borderColor = "#e8e8e8"; 
              e.target.style.background = "#f5f5f5"; 
              setTimeout(() => setShowSuggestions(false), 160);
            }}
            placeholder="Tìm tên đồ uống..."
            style={{
              width: "100%", padding: "14px 40px 14px 16px",
              background: "#f5f5f5",
              border: "2px solid #e8e8e8", borderRadius: "8px",
              color: "#111", fontSize: 15,
              fontFamily: "'Roboto', sans-serif",
              outline: "none", boxSizing: "border-box",
              letterSpacing: 0.2,
              transition: "all 0.2s",
            }}
          />
          {search && (
            <button onClick={() => setSearch("")} style={{
              position: "absolute", right: 12, top: "50%", transform: "translateY(-50%)",
              background: "none", border: "none", color: "#bbb",
              cursor: "pointer", fontSize: 18, padding: 4,
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => e.currentTarget.style.color = "#111"}
            onMouseLeave={(e) => e.currentTarget.style.color = "#bbb"}
            >✕</button>
          )}
        </div>

        {/* SUGGESTIONS */}
        {showSuggestions && suggestions.length > 0 && (
          <div style={{
            position: "absolute", left: 20, right: 20, top: "calc(100% + 8px)",
            background: "#fff",
            border: "1px solid #e8e8e8",
            borderRadius: "8px",
            boxShadow: "0 12px 32px rgba(0,0,0,0.12)",
            zIndex: 200,
            overflow: "hidden",
          }}>
            {suggestions.map((item, i) => (
              <div
                key={item.id}
                onMouseDown={() => { setSearch(item.name); setShowSuggestions(false); }}
                style={{
                  padding: "13px 16px",
                  display: "flex", justifyContent: "space-between", alignItems: "center",
                  cursor: "pointer",
                  borderBottom: i < suggestions.length - 1 ? "1px solid #f5f5f5" : "none",
                  fontSize: 14, fontFamily: "'Roboto', sans-serif",
                  transition: "background 0.12s",
                }}
                onMouseEnter={(e) => e.currentTarget.style.background = "#f9f9f9"}
                onMouseLeave={(e) => e.currentTarget.style.background = "#fff"}
              >
                <span style={{ color: "#222", fontWeight: 500 }}>{item.name}</span>
                <span style={{ color: "#aaa", fontSize: 13 }}>{fmt(item.price)}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* CATEGORIES */}
      <div style={{
        display: "flex", overflowX: "auto", padding: "16px 20px 0",
        scrollbarWidth: "none", borderBottom: "1px solid #e8e8e8", gap: 4,
      }}>
        {categories.map((cat) => {
          const active = activeCategory === cat.id;
          return (
            <button key={cat.id} onClick={() => setActiveCategory(cat.id)} style={{
              flexShrink: 0, padding: "8px 16px 11px",
              background: active ? "#111" : "transparent",
              color: active ? "#fff" : "#999",
              border: "1px solid " + (active ? "#111" : "transparent"),
              borderRadius: "6px",
              fontFamily: "'Roboto', sans-serif",
              fontSize: 12, letterSpacing: 1, textTransform: "uppercase",
              cursor: "pointer", transition: "all 0.2s", whiteSpace: "nowrap",
              fontWeight: active ? 600 : 500,
            }}
            onMouseEnter={(e) => {
              if (!active) {
                e.currentTarget.style.background = "#f5f5f5";
                e.currentTarget.style.borderColor = "#e0e0e0";
              }
            }}
            onMouseLeave={(e) => {
              if (!active) {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.borderColor = "transparent";
              }
            }}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* COUNT */}
      <div style={{
        padding: "16px 20px 0",
        fontSize: 11, color: "#bbb",
        letterSpacing: 2, textTransform: "uppercase",
        fontFamily: "'Roboto', sans-serif", fontWeight: 500,
      }}>
        {displayItems.length} sản phẩm
      </div>

      {/* PRODUCT LIST */}
      <div style={{ padding: "12px 20px 0" }}>
        {displayItems.length === 0 ? (
          <div style={{
            textAlign: "center", padding: "80px 20px",
            color: "#ccc", fontSize: 13, letterSpacing: 2,
            textTransform: "uppercase", fontFamily: "'Roboto', sans-serif",
            fontWeight: 500,
          }}>
            Không tìm thấy sản phẩm
          </div>
        ) : displayItems.map((item) => {
          const inCart = cart.find((c) => c.id === item.id);
          return (
            <div key={item.id} style={{
              display: "flex", alignItems: "center", justifyContent: "space-between",
              padding: "14px 0",
              borderBottom: "1px solid #f5f5f5",
              background: inCart ? "rgba(17, 17, 17, 0.02)" : "transparent",
              transition: "all 0.15s",
              cursor: "default",
            }}
            onMouseEnter={(e) => {
              if (!inCart) {
                e.currentTarget.style.background = "rgba(17, 17, 17, 0.01)";
              }
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = inCart ? "rgba(17, 17, 17, 0.02)" : "transparent";
            }}
            >
              <div style={{ flex: 1, paddingRight: 16 }}>
                <div style={{
                  fontSize: 15, fontWeight: 500,
                  color: "#111",
                  letterSpacing: -0.2,
                  lineHeight: "1.5",
                }}>
                  {item.name}
                </div>
                <div style={{
                  fontSize: 13, color: "#999",
                  marginTop: 4,
                  fontFamily: "'Roboto', sans-serif",
                  letterSpacing: 0.3,
                  fontWeight: 500,
                }}>
                  {fmt(item.price)}
                </div>
              </div>

              {inCart ? (
                <div style={{ display: "flex", alignItems: "center", gap: "8px", flexShrink: 0 }}>
                  <button onClick={() => removeFromCart(item.id)} style={{
                    width: 34, height: 34,
                    background: "#fff",
                    border: "1.5px solid #ddd",
                    color: "#666", fontSize: 18,
                    cursor: "pointer",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    transition: "all 0.15s",
                    borderRadius: "6px",
                    fontWeight: 600,
                  }}
                    onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#111"; e.currentTarget.style.color = "#111"; e.currentTarget.style.background = "#f5f5f5"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.borderColor = "#ddd"; e.currentTarget.style.color = "#666"; e.currentTarget.style.background = "#fff"; }}
                  >−</button>
                  <span style={{
                    width: 32, textAlign: "center",
                    fontSize: 14, fontWeight: 700, color: "#111",
                    fontFamily: "'Roboto', sans-serif",
                  }}>{inCart.qty}</span>
                  <button onClick={() => addToCart(item)} style={{
                    width: 34, height: 34,
                    background: "#111", border: "1.5px solid #111",
                    color: "#fff", fontSize: 18,
                    cursor: "pointer",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    transition: "all 0.15s",
                    borderRadius: "6px",
                    fontWeight: 600,
                  }}
                    onMouseEnter={(e) => { e.currentTarget.style.opacity = "0.8"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.opacity = "1"; }}
                  >+</button>
                </div>
              ) : (
                <button onClick={() => addToCart(item)} style={{
                  width: 36, height: 36, flexShrink: 0,
                  background: "transparent",
                  border: "1.5px solid #ddd",
                  color: "#999", fontSize: 22,
                  cursor: "pointer",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  transition: "all 0.15s",
                  borderRadius: "6px",
                  fontWeight: 600,
                }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = "#111"; e.currentTarget.style.color = "#fff"; e.currentTarget.style.borderColor = "#111"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#999"; e.currentTarget.style.borderColor = "#ddd"; }}
                >+</button>
              )}
            </div>
          );
        })}
      </div>

      {/* BOTTOM RULE */}
      {totalItems === 0 && (
        <div style={{ margin: "32px 20px 0", height: 1, background: "#e8e8e8" }} />
      )}

      {/* CART FOOTER */}
      {totalItems > 0 && (
        <div style={{
          position: "fixed", bottom: 0, left: 0, right: 0,
          background: "#fff",
          borderTop: "2px solid #111",
          zIndex: 300,
          boxShadow: "0 -8px 32px rgba(0,0,0,0.08)",
        }}>
          {/* SUMMARY */}
          <div
            onClick={() => setCartOpen((v) => !v)}
            style={{
              display: "flex", alignItems: "center", justifyContent: "space-between",
              padding: "16px 20px", cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              if (!cartOpen) e.currentTarget.style.background = "#fafafa";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "#fff";
            }}
          >
            <div>
              <div style={{
                fontSize: 11, letterSpacing: 2, color: "#999",
                textTransform: "uppercase",
                fontFamily: "'Roboto', sans-serif", fontWeight: 500,
              }}>
                {totalItems} sản phẩm đã chọn
              </div>
              <div style={{ fontSize: 26, fontWeight: 700, color: "#111", marginTop: 4 }}>
                {fmt(total)}
              </div>
            </div>
            <button style={{
              width: 40, height: 40,
              background: "#111", border: "none",
              color: "#fff", fontSize: 18,
              cursor: "pointer",
              display: "flex", alignItems: "center", justifyContent: "center",
              borderRadius: "6px",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => e.currentTarget.style.opacity = "0.8"}
            onMouseLeave={(e) => e.currentTarget.style.opacity = "1"}
            >
              {cartOpen ? "↓" : "↑"}
            </button>
          </div>

          {/* EXPANDED */}
          {cartOpen && (
            <div style={{
              padding: "0 20px 20px",
              maxHeight: 260, overflowY: "auto",
              borderTop: "1px solid #e8e8e8",
              animation: "slideDown 0.2s ease-out",
            }}>
              {cart.map((c) => (
                <div key={c.id} style={{
                  display: "flex", justifyContent: "space-between", alignItems: "flex-start",
                  padding: "12px 0", borderBottom: "1px solid #f5f5f5",
                  fontSize: 13, fontFamily: "'Roboto', sans-serif",
                }}>
                  <span style={{ color: "#333", flex: 1, paddingRight: 12, lineHeight: 1.5, fontWeight: 500 }}>
                    {c.name}
                  </span>
                  <span style={{ color: "#777", whiteSpace: "nowrap", fontWeight: 500 }}>
                    ×{c.qty} — {fmt(c.price * c.qty)}
                  </span>
                </div>
              ))}
              <button
                onClick={() => { setCart([]); setCartOpen(false); }}
                style={{
                  marginTop: 16, width: "100%", padding: "12px",
                  background: "transparent",
                  border: "1.5px solid #e0e0e0",
                  color: "#999", fontSize: 11, letterSpacing: 2,
                  textTransform: "uppercase", cursor: "pointer",
                  fontFamily: "'Roboto', sans-serif",
                  transition: "all 0.15s", fontWeight: 600,
                  borderRadius: "6px",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#111"; e.currentTarget.style.color = "#111"; e.currentTarget.style.background = "#f5f5f5"; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = "#e0e0e0"; e.currentTarget.style.color = "#999"; e.currentTarget.style.background = "transparent"; }}
              >
                Xóa đơn
              </button>
            </div>
          )}
        </div>
      )}

      <style>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}