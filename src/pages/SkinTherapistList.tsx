import { Card, Col, Row, Typography, Button } from "antd";
import "../style/SkinTherapistList.module.css"
const { Title, Text } = Typography;

const experts = [
  {
    id: 1,
    name: "Nancy Reimer",
    expertise: "Giáo dục & Kiến thức chăm sóc da",
    experience:
      "Hàng chục năm kinh nghiệm và kiến thức chuyên sâu về chăm sóc da.",
    field: "Giáo dục",
    degree: "Giám đốc Giáo dục",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    name: "Tiffany Medois",
    expertise: "Tư vấn viên & Chuyên viên thẩm mỹ",
    experience:
      "Từng làm nhà báo, nhà sản xuất, nhà làm phim tài liệu và biên tập viên.",
    field: "Tư vấn",
    degree: "Chuyên viên Thẩm mỹ Chứng nhận",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    name: "Katina Gilmore",
    expertise: "Điều dưỡng & Thẩm mỹ",
    experience:
      "Kết hợp giữa điều dưỡng và thẩm mỹ để mang lại sự chuyên môn cá nhân hóa.",
    field: "Chăm sóc sức khỏe",
    degree: "Y tá Chứng nhận (R.N.)",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 4,
    name: "Bill Levins",
    expertise: "Giám đốc Tiếp thị",
    experience:
      "Mang đến kiến thức thông qua sự am hiểu sâu sắc trong ngành kinh doanh chăm sóc da.",
    field: "Tiếp thị",
    degree: "Phó Chủ tịch Tiếp thị",
    image: "https://via.placeholder.com/150",
  },
];

const SkinTherapist = () => {
  return (
    <div
      style={{
        padding: "80px 10%",
        backgroundColor:"#6B705C", 
        borderRadius: "12px",
        boxShadow: "0 8px 16px rgba(0,0,0,0.1)",
      }}
    >
      
      <Title
         level={2}
         style={{
           color: "#3A5A40",
           fontSize: "32px",
           fontWeight: "bold",
           marginBottom: "20px",
         }}
      >
        Chọn chuyên viên trị liệu da cho bạn
      </Title>

     
      <Row gutter={[32, 32]} justify="center">
        {experts.map((expert) => (
          <Col xs={24} sm={12} md={8} lg={6} key={expert.id}>
            <Card
              hoverable
              style={{
                borderRadius: "12px",
                textAlign: "center",
                boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                transition: "transform 0.3s ease-in-out",
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.transform = "scale(1.05)")
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.transform = "scale(1)")
              }
              cover={
                <div
                  style={{
                    borderTopLeftRadius: "12px",
                    borderTopRightRadius: "12px",
                    overflow: "hidden",
                  }}
                >
                  <img
                    alt={expert.name}
                    src={expert.image}
                    style={{
                      width: "100%",
                      objectFit: "cover",
                      borderTopLeftRadius: "12px",
                      borderTopRightRadius: "12px",
                      transition: "opacity 0.3s ease-in-out",
                    }}
                    onMouseOver={(e) =>
                      (e.currentTarget.style.opacity = "0.8")
                    }
                    onMouseOut={(e) =>
                      (e.currentTarget.style.opacity = "1")
                    }
                  />
                </div>
              }
            >
              <Title level={4} style={{ marginBottom: "5px", color: "#3A5A40" }}>
                {expert.name}
              </Title>
              <Text strong style={{ color: "#6B705C" }}>{expert.expertise}</Text>
              <br />
              <Text>{expert.experience}</Text>
              <br />
              <Text type="secondary">Lĩnh vực: {expert.field}</Text>
              <br />
              <Text type="secondary">Bằng cấp: {expert.degree}</Text>
              <div style={{ marginTop: "15px" }}>
                <Button
                  type="primary"
                  shape="round"
                  style={{
                    backgroundColor: "#A7C957",
                    border: "none",
                    fontSize: "16px",
                    padding: "10px 20px",
                    borderRadius: "8px",
                    boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
                    transition: "all 0.3s ease-in-out",
                  }}
                  onMouseOver={(e) =>
                    (e.currentTarget.style.backgroundColor = "#8AA851")
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.style.backgroundColor = "#A7C957")
                  }
                >
                  Đặt lịch với {expert.name.split(" ")[0]}
                </Button>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default SkinTherapist;