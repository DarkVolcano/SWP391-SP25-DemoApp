import { Card, Col, Row, Typography, Button } from "antd";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useTherapists } from "../hooks/useGetTherapist";
import { useTherapistStore } from "../hooks/useTherapistStore";
import { InfoOutlined } from "@ant-design/icons";

const { Title, Text } = Typography;

const SkinTherapistList = () => {
  const navigate = useNavigate();
  const {
    data: therapistData,
    isLoading: isLoadingTherapist,
    error: errorTherapist,
  } = useTherapists();

  const { setTherapists } = useTherapistStore();

  const handleNavigate = (id: number) => {
    navigate(`/Homepage/SkinTherapist/${id}`);
  };

  useEffect(() => {
    if (therapistData && !isLoadingTherapist && !errorTherapist) {
      setTherapists(therapistData);
    }
  }, [therapistData, isLoadingTherapist, errorTherapist, setTherapists]);

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
        Chọn chuyên viên trị liệu da cho bạn
      </Title>

     
      <Row gutter={[32, 32]} justify="center">
        {therapistData?.map((therapist) => (
          <Col xs={24} sm={12} md={8} lg={6} key={therapist.skintherapistId}>
            <Card
              hoverable
              style={{
                borderRadius: "12px",
                textAlign: "center",
                padding: "20px",
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
                    alt={therapist.name}
                    src={therapist.image}
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
              actions={[
                <Button
                  type="text"
                  icon={<InfoOutlined />}
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
                  onClick={() => handleNavigate(therapist.skintherapistId)}
                >
                  Thông tin
                </Button>,
                <Button
                  type="primary"
                  key="book"
                  style={{
                    backgroundColor: "#A7C957",
                    border: "none",
                    fontSize: "14px", 
                    padding: "6px 12px",
                    borderRadius: "20px", 
                    whiteSpace: "nowrap", 
                    maxWidth: "100px", 
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
                  onClick={() => handleNavigate(therapist.skintherapistId)}
                >
                  Đặt lịch
                </Button>,
              ]}
            >
              <Title level={4} style={{ marginBottom: "5px", color: "#3A5A40" }}>
                {therapist.name}
              </Title>
              <Text strong style={{ fontSize: "16px", color: "#6B705C" }}>
                {therapist.expertise}
              </Text>
              <br />
              <Text style={{ fontSize: "16px", color: "#6B705C" }}>
                Kinh nghiệm: {therapist.experience}
              </Text>
              <br />
              <Text
                type="secondary"
                style={{ fontSize: "16px", color: "#6B705C" }}
              >
                Bằng cấp: {therapist.degree}
              </Text>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default SkinTherapistList;