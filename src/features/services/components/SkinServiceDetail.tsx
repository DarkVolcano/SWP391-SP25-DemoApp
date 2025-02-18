import { Card, Typography, Row, Col, Image, Button, Divider, Spin } from "antd";
import { DollarOutlined } from "@ant-design/icons";
import { useNavigate, useParams } from "react-router-dom";
import { useServiceById } from "../hooks/useGetServiceId";
import { PagePath } from "../../../enums/page-path.enum";

const { Title, Text } = Typography;

const ServiceDetail = () => {
  const navigate = useNavigate();
  const { serviceId } = useParams();
  const { data: service, isLoading, isError } = useServiceById(serviceId || "");

  if (isLoading) {
    return <Spin size="large" />;
  }

  if (isError || !service) {
    return <div>Không tìm thấy dịch vụ</div>;
  }

  const handleNavigate = () => {
    navigate(PagePath.BOOKING_SERVICE);
  };

  return (
    <div
      style={{
        padding: "40px 10%",
        backgroundColor: "#F1EBE4",
        borderRadius: "12px",
        boxShadow: "0 8px 16px rgba(0,0,0,0.1)",
      }}
    >
      <Card
        style={{
          maxWidth: 1200,
          margin: "40px auto", 
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          padding: "24px",
        }}
        bodyStyle={{
          padding: "24px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Row gutter={32}>
       
          <Col xs={24} md={10}>
            <Image
              src={service.image}
              alt={service.name}
              style={{
                borderRadius: "12px",
                width: "100%",
                height: "auto",
                objectFit: "cover",
                transition: "opacity 0.3s ease-in-out",
              }}
              onMouseOver={(e) => (e.currentTarget.style.opacity = "0.8")}
              onMouseOut={(e) => (e.currentTarget.style.opacity = "1")}
            />
          </Col>

          <Col xs={24} md={14} style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ flexGrow: 1 }}>
              <Title
                level={2}
                style={{
                  marginBottom: 16,
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  maxWidth: "90%",
                }}
              >
                {service.name}
              </Title>
              <Text style={{ fontSize: 16, color: "#555" }}>{service.description}</Text>
              <Divider />

              {/* Giá dịch vụ */}
              <div style={{ marginBottom: 16, fontSize: "18px", fontWeight: "bold", color: "#FA541C" }}>
                <DollarOutlined style={{ color: "#52c41a", marginRight: 8 }} />
                {service.price}
              </div>
            </div>


            <Button
              type="primary"
              size="large"
              style={{
                marginTop: "auto",
                backgroundColor: "#A7C957",
                border: "none",
                fontSize: "16px",
                padding: "12px 24px",
                borderRadius: "8px",
                boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
                transition: "all 0.3s ease-in-out",
              }}
              onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#8AA851")}
              onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#A7C957")}
              onClick={() => handleNavigate()}
            >
              Đặt lịch ngay
            </Button>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default ServiceDetail;