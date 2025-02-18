import { Card, Row, Col, Typography, Avatar, Tag } from "antd";
import { UserOutlined, CalendarOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const { Title, Text } = Typography;

const featuredPost = {
  id: 0,
  title: "Tác Động Của Công Nghệ Đến Nơi Làm Việc: Sự Thay Đổi Ra Sao",
  author: "Tracey Wilson",
  date: "20 Tháng 8, 2022",
  coverImage: "https://via.placeholder.com/800x400",
  category: "Công Nghệ",
};

const blogPosts = [
  {
    id: 1,
    title: "Tác Động Của Công Nghệ Đến Nơi Làm Việc: Sự Thay Đổi Ra Sao",
    author: "Tracey Wilson",
    date: "20 Tháng 8, 2022",
    coverImage: "https://via.placeholder.com/300x200",
    category: "Công Nghệ",
  },
  {
    id: 2,
    title: "Cách Tăng Năng Suất Trong Môi Trường Làm Việc Từ Xa",
    author: "Jason Francisco",
    date: "20 Tháng 8, 2022",
    coverImage: "https://via.placeholder.com/300x200",
    category: "Năng Suất",
  },
  {
    id: 3,
    title: "Top 10 Điểm Đến Du Lịch Hàng Đầu Năm 2023",
    author: "Elizabeth Slavin",
    date: "30 Tháng 8, 2022",
    coverImage: "https://via.placeholder.com/300x200",
    category: "Du Lịch",
  },
];

const BlogPage = () => {
  const navigate = useNavigate();

  const handleNavigate = (id: number) => {
    navigate(`/Homepage/blog/${id}`);
  };

  return (
    <div
      style={{
        padding: "60px 10%",
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
        Bài Viết Nổi Bật
      </Title>

   
      <div style={{ marginBottom: "40px" }}>
        <Card
          hoverable
          style={{
            borderRadius: "12px",
            overflow: "hidden",
            position: "relative",
            transition: "transform 0.3s ease-in-out",
          }}
          className="blog"
          cover={
            <img
              alt={featuredPost.title}
              src={featuredPost.coverImage}
              style={{
                width: "100%",
                height: "400px",
                objectFit: "cover",
                borderRadius: "12px 12px 0 0",
                transition: "opacity 0.3s ease-in-out",
              }}
              onMouseOver={(e) => (e.currentTarget.style.opacity = "0.9")}
              onMouseOut={(e) => (e.currentTarget.style.opacity = "1")}
            />
          }
          onClick={() => handleNavigate(featuredPost.id)}
        >
          <Tag color="blue">{featuredPost.category}</Tag>
          <Title
            level={2}
            style={{
              marginTop: "20px",
              marginBottom: "10px",
              textAlign: "center",
              fontWeight: "bold",
            }}
          >
            {featuredPost.title}
          </Title>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "10px",
            }}
          >
            <Avatar icon={<UserOutlined />} style={{ marginRight: "10px" }} />
            <Text>
              {featuredPost.author} &nbsp;|&nbsp; <CalendarOutlined />{" "}
              {featuredPost.date}
            </Text>
          </div>
        </Card>
      </div>

 
      <Row gutter={[32, 32]} justify="center">
        {blogPosts.map((post) => (
          <Col xs={24} sm={12} md={8} key={post.id}>
            <Card
              hoverable
              cover={
                <img
                  alt={post.title}
                  src={post.coverImage}
                  style={{
                    height: "200px",
                    objectFit: "cover",
                    borderRadius: "12px 12px 0 0",
                    transition: "opacity 0.3s ease-in-out",
                  }}
                  onMouseOver={(e) => (e.currentTarget.style.opacity = "0.9")}
                  onMouseOut={(e) => (e.currentTarget.style.opacity = "1")}
                />
              }
              style={{
                borderRadius: "12px",
                overflow: "hidden",
                transition: "transform 0.3s ease-in-out",
              }}
              onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.02)")}
              onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
              onClick={() => handleNavigate(post.id)}
            >
              <Tag color="blue">{post.category}</Tag>
              <Title
                level={4}
                style={{
                  marginTop: "10px",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  maxWidth: "90%",
                  textAlign: "center",
                }}
              >
                {post.title}
              </Title>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: "10px",
                }}
              >
                <Avatar icon={<UserOutlined />} style={{ marginRight: "10px" }} />
                <Text>
                  {post.author} &nbsp;|&nbsp; <CalendarOutlined /> {post.date}
                </Text>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default BlogPage;