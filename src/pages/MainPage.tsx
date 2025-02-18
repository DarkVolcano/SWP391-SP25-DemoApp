import { Layout, Button, Card, Row, Col, Typography, Image } from "antd";
import { RightOutlined, ArrowRightOutlined } from "@ant-design/icons";
import "antd/dist/reset.css";
import "../style/HomePage.css";
import { Link } from "react-router-dom";
import { PagePath } from "../enums/page-path.enum";


const { Content } = Layout;

const { Title, Text, Paragraph } = Typography;

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

const HomePage = () => {
  return (
    <Layout>
      {/* <Header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          background: "#fff",
          padding: "0 50px",
        }}
      >
        <Title level={3} style={{ margin: 0 }}>
          CEIN.
        </Title>
        <Menu
          mode="horizontal"
          defaultSelectedKeys={["1"]}
          style={{ flex: 1, justifyContent: "center" }}
        >
          <Menu.Item key="1">Sản phẩm</Menu.Item>
          <Menu.Item key="2">Hướng dẫn</Menu.Item>
          <Menu.Item key="3">Dịch vụ</Menu.Item>
          <Menu.Item key="4">Cửa hàng</Menu.Item>
        </Menu>
        <div>
          <SearchOutlined style={{ fontSize: 20, marginRight: 15 }} />
          <UserOutlined style={{ fontSize: 20, marginRight: 15 }} />
          <ShoppingCartOutlined style={{ fontSize: 20 }} />
        </div>
      </Header> */}

      <Layout
        style={{
          background: "rgb(214 180 150)",
          padding: "60px",
          height: "100vh",
          display: "flex",
          alignItems: "center",
        }}
        className="homepage"
      >
         <Content
      style={{
        padding: "80px 10%",
        backgroundColor: "#F1EBE4", 
        borderRadius: "12px",
        boxShadow: "0 8px 16px rgba(0,0,0,0.1)",
      }}
    >
      <Row gutter={[40, 40]} align="middle">
       
        <Col xs={24} sm={12}>
          <Text
            style={{
              fontSize: "14px",
              textTransform: "uppercase",
              color: "#6B705C",
              letterSpacing: "1px",
            }}
          >
            Hãy Chăm Sóc Da Như Cơ Thể Của Bạn
          </Text>

          <Title
            level={2}
            style={{
              fontSize: "38px",
              fontWeight: "600",
              marginTop: "20px",
              color: "#3A5A40",
            }}
          >
            Giới thiệu về Lam Spa
          </Title>

          <Paragraph
            style={{
              fontSize: "18px",
              lineHeight: "1.8",
              color: "#555",
              marginTop: "10px",
            }}
          >
            Làn da là tấm gương phản chiếu sức khỏe và vẻ đẹp của bạn. Việc chăm
            sóc da không chỉ giúp da sáng khỏe, mềm mịn mà còn mang lại cảm giác
            thư giãn và tự tin trong cuộc sống hằng ngày. Tại{" "}
            <Text strong style={{ color:" #555" }}>Lam Spa</Text>, chúng tôi
            cam kết mang đến các liệu trình chăm sóc da chuyên sâu, được thiết kế
            riêng cho từng loại da.
          </Paragraph>

          <Link to="/quiz">
            <Button
              type="primary"
              size="large"
              style={{
                marginTop: "20px",
                backgroundColor: "#A7C957",
                border: "none",
                fontSize: "16px",
                padding: "12px 24px",
                borderRadius: "8px",
                boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
                transition: "all 0.3s ease-in-out",
              }}
              icon={<ArrowRightOutlined />}
              onMouseOver={(e) =>
                (e.currentTarget.style.backgroundColor = "#8AA851")
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.backgroundColor = "#A7C957")
              }
            >
              Trắc nghiệm xác định loại da
            </Button>
          </Link>
        </Col>

        <Col xs={24} sm={12} style={{ display: "flex", justifyContent: "center" }}>
          <div
            style={{
              position: "relative",
              borderRadius: "12px",
              overflow: "hidden",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
            }}
          >
            <Image
              src="https://i.pinimg.com/736x/f6/7f/df/f67fdf6dbf84b63dbb570b4a6be2d2db.jpg"
              alt="Lam Spa"
              preview={false}
              style={{
                width: "100%",
                borderRadius: "12px",
                objectFit: "cover",
                transition: "transform 0.3s ease-in-out",
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.transform = "scale(1.05)")
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.transform = "scale(1)")
              }
            />
          </div>
        </Col>
      </Row>
    </Content>
      </Layout>

      <div
      style={{
        background: "#F1EBE4",
        borderRadius: "12px",
        position: "relative",
      }}
    >
      <Row gutter={[40, 40]} align="middle">
       
        <Col xs={24} md={10}>
          <div
            style={{
              borderRadius: "12px",
              overflow: "hidden",
              boxShadow: "0 8px 16px rgba(0,0,0,0.1)",
            }}
          >
            <img
              src="https://i.pinimg.com/736x/77/f8/c0/77f8c021a157035997684b122b51f222.jpg"
              alt="Skincare Product"
              style={{
                width: "100%",
                borderRadius: "12px",
                objectFit: "cover",
                transition: "transform 0.3s ease-in-out",
              }}
              onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
              onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
            />
          </div>
        </Col>

        
        <Col xs={24} md={14}>
          <Typography>
            <Title level={5} style={{ color: "#6B705C", textTransform: "uppercase", letterSpacing: "1px" }}>
              Chăm Sóc Da
            </Title>

            <Title level={2} style={{ fontSize: "36px", color: "#3A5A40", fontWeight: "bold" }}>
              Dịch Vụ Chăm Sóc Da Chuyên Sâu
            </Title>

            <Paragraph style={{ fontSize: "18px", lineHeight: "1.8", color: "#555" }}>
              Khám phá các phương pháp chăm sóc da hiện đại, giúp tái tạo và
              bảo vệ làn da. Chúng tôi sử dụng các sản phẩm tự nhiên kết hợp
              với công nghệ tiên tiến, mang đến sự trẻ hóa và rạng rỡ cho làn
              da của bạn.
            </Paragraph>

            <Button
              type="primary"
              size="large"
              style={{
                backgroundColor: "#A7C957",
                border: "none",
                fontSize: "16px",
                padding: "12px 24px",
                borderRadius: "8px",
                boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
                transition: "all 0.3s ease-in-out",
              }}
              icon={<RightOutlined />}
              onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#8AA851")}
              onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#A7C957")}
            >
              Đọc Thêm
            </Button>
          </Typography>
        </Col>
      </Row>
    </div>

      {/* <Content style={{ padding: "50px", background: "#fff" }}>
        <Title level={3} style={{ textAlign: "center" }}>
          Top Sản Phẩm Nổi Bật
        </Title>
        <Row gutter={[16, 16]} justify="center">
          {products.map((product, index) => (
            <Col key={index} xs={24} sm={12} md={6} lg={6}>
              <Card cover={<Image src={product.image} alt={product.title} />}>
                <Title level={5}>{product.title}</Title>
                <Text strong>{product.price}</Text>
                <br />
                <Button type="primary" style={{ marginTop: 10 }}>
                  Mua Ngay
                </Button>
              </Card>
            </Col>
          ))}
        </Row>
      </Content> */}

<Content
      style={{
        padding: "80px 10%",
        background: "#F1EBE4", 
        borderRadius: "12px",
        boxShadow: "0 8px 16px rgba(0,0,0,0.1)",
      }}
    >
     
      <Title
        level={3}
        style={{
          textAlign: "center",
          color: "#3A5A40",
          fontSize: "32px",
          fontWeight: "bold",
          marginBottom: "40px",
        }}
      >
        Blog Làm Đẹp
      </Title>

      <Row gutter={[32, 32]} justify="center">
        {[ 
          {
            image: "https://via.placeholder.com/150",
            title: "Quy trình chăm sóc da mặt tốt nhất",
          },
          {
            image: "https://via.placeholder.com/150",
            title: "Top 5 sản phẩm dưỡng da hot nhất",
          },
          {
            image: "https://via.placeholder.com/150",
            title: "Cách lựa chọn mỹ phẩm phù hợp với làn da",
          }
        ].map((blog, index) => (
          <Col xs={24} sm={12} md={8} lg={6} key={index}>
            <Card
              hoverable
              cover={
                <div
                  style={{
                    borderRadius: "12px",
                    overflow: "hidden",
                    transition: "transform 0.3s ease-in-out",
                  }}
                >
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    preview={false}
                    style={{
                      width: "100%",
                      borderRadius: "12px",
                      objectFit: "cover",
                      transition: "opacity 0.3s ease-in-out",
                    }}
                    onMouseOver={(e) => (e.currentTarget.style.opacity = "0.8")}
                    onMouseOut={(e) => (e.currentTarget.style.opacity = "1")}
                  />
                </div>
              }
              style={{
                borderRadius: "12px",
                boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                transition: "transform 0.3s ease-in-out",
              }}
              onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
              onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
              <Title level={5} style={{ color: "#3A5A40", fontSize: "18px" }}>
                {blog.title}
              </Title>
              <Button
                type="link"
                style={{
                  color: "#A7C957",
                  fontSize: "16px",
                  fontWeight: "bold",
                  transition: "color 0.3s ease-in-out",
                }}
                onMouseOver={(e) => (e.currentTarget.style.color = "#8AA851")}
                onMouseOut={(e) => (e.currentTarget.style.color = "#A7C957")}
              >
                Đọc thêm
              </Button>
            </Card>
          </Col>
        ))}
      </Row>
    </Content>

    <Content
      style={{
        padding: "80px 10%",
        backgroundColor: "#F1EBE4", // Màu be nhẹ đồng bộ
        borderRadius: "12px",
        boxShadow: "0 8px 16px rgba(0,0,0,0.1)",
      }}
    >
      {/* Tiêu đề */}
      <Title
        level={3}
        style={{
          textAlign: "center",
          color: "#3A5A40",
          fontSize: "32px",
          fontWeight: "bold",
          marginBottom: "40px",
        }}
      >
        Chuyên viên trị liệu da
      </Title>

      {/* Danh sách chuyên viên */}
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
    </Content>
    </Layout>
  );
};

export default HomePage;
