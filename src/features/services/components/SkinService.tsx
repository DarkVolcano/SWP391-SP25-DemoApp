import { useEffect } from "react";
import { Card, Button, Row, Col, Typography } from "antd";
import { HeartOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { useServices } from "../hooks/useGetService";
import { useServiceStore } from "../hooks/useServiceStore";

const { Title, Text } = Typography;

const SkincareServices = () => {
  const navigate = useNavigate();
  const {
    data: serviceData,
    isLoading: isLoadingService,
    error: errorService,
  } = useServices();

  const { setServices } = useServiceStore();

  const handleNavigate = (serviceId: number) => {
    navigate(`/Homepage/Service/${serviceId}`);
  };

  useEffect(() => {
    if (serviceData && !isLoadingService && !errorService) {
      setServices(serviceData);
    }
  }, [serviceData, isLoadingService, errorService, setServices]);

  return (
    <div
      style={{
        padding: "80px 10%",
        backgroundColor: "#F1EBE4", 
        borderRadius: "12px",
        boxShadow: "0 8px 16px rgba(0,0,0,0.1)",
        textAlign: "center",
      }}
    >
      
      <Title
        level={2}
        style={{
          textAlign: "center",
          color: "#3A5A40",
          fontSize: "32px",
          fontWeight: "bold",
          marginBottom: "40px",
        }}
      >
        Dịch Vụ Chăm Sóc Da Chuyên Nghiệp
      </Title>

    
      <Row gutter={[32, 32]} justify="center">
        {serviceData?.map((service) => (
          <Col
            key={service.serviceId}
            xs={24}
            sm={12}
            md={8}
            lg={6}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Card
              hoverable
              style={{
                borderRadius: "12px",
                textAlign: "center",
                padding: "15px",
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
                    alt={service.name}
                    src={service.image}
                    style={{
                      width: "230px",
                      height: "220px",
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
              actions={[
                <Button
                  type="text"
                  icon={<HeartOutlined />}
                  key="wishlist"
                  style={{
                    color: "#3A5A40",
                    fontWeight: "bold",
                    transition: "color 0.3s ease-in-out",
                  }}
                  onMouseOver={(e) =>
                    (e.currentTarget.style.color = "#6B705C")
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.style.color = "#3A5A40")
                  }
                >
                  Yêu thích
                </Button>,
                <Button
                  type="primary"
                  icon={<ShoppingCartOutlined />}
                  key="book"
                  style={{
                    backgroundColor: "#A7C957",
                    border: "none",
                    fontSize: "14px",
                    padding: "8px 16px",
                    borderRadius: "20px",
                    whiteSpace: "nowrap",
                    maxWidth: "110px",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
                    transition: "all 0.3s ease-in-out",
                  }}
                  onMouseOver={(e) =>
                    (e.currentTarget.style.backgroundColor = "#8AA851")
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.style.backgroundColor = "#A7C957")
                  }
                  onClick={() => handleNavigate(service.serviceId)}
                >
                  Đặt ngay
                </Button>,
              ]}
            >
              <Title
                level={4}
                style={{
                  marginBottom: "10px",
                  color: "#3A5A40",
                  fontWeight: "bold",
                }}
              >
                {service.name}
              </Title>
              <Text
                style={{
                  fontSize: "16px",
                  color: "#6B705C",
                  display: "block",
                  marginBottom: "10px",
                }}
              >
                {service.description}
              </Text>
              <div
                style={{
                  fontSize: "18px",
                  fontWeight: "bold",
                  color: "#FA541C",
                  marginTop: "10px",
                }}
              >
                {service.price}
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default SkincareServices;