import React, { useState, useEffect } from "react"
import { Card, Image, Stack, Container } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { solid, regular } from "@fortawesome/fontawesome-svg-core/import.macro"
import Data from "../src/asset/Data.json"

const App = () => {
  const [dummyData, setdummyData] = useState([])

  useEffect(() => {
    setdummyData(Data)
  }, [])

  console.log(dummyData)

  return (
    <>
      {dummyData.map((e) => {
        return (
          <>
            <Container className="d-flex justify-content-center">
              <Card style={{ width: "400px", marginBottom: "20px" }}>
                <Card.Body>
                  <Stack direction="horizontal" className="mb-2 ">
                    <Image
                      src={e.user_image}
                      style={{
                        width: "30px",
                        borderRadius: "50%",
                        marginRight: "10px",
                      }}
                    />
                    <p className="fw-bold pt-3">{e.username}</p>
                    <FontAwesomeIcon
                      icon={solid("ellipsis")}
                      style={{ marginLeft: "190px", fontSize: "20px" }}
                    />
                  </Stack>
                  <Image
                    src={e.post_image}
                    style={{
                      width: "400px",
                      objectFit: "cover",
                      marginLeft: "-17px",
                    }}
                  />
                  <Stack>
                    <div className="mt-2" style={{ fontSize: "23px" }}>
                      {e.isLiked === true ? (
                        <FontAwesomeIcon
                          icon={solid("heart")}
                          className="me-3 text-danger"
                        />
                      ) : (
                        <FontAwesomeIcon
                          icon={regular("heart")}
                          className="me-3"
                        />
                      )}

                      <FontAwesomeIcon
                        icon={regular("comment")}
                        className="me-3"
                      />
                      <FontAwesomeIcon
                        icon={regular("paper-plane")}
                        className="me-3"
                      />
                      <FontAwesomeIcon
                        icon={regular("bookmark")}
                        style={{ marginLeft: "230px" }}
                      />
                    </div>
                  </Stack>
                  <Card.Text>{e.likes} Likes</Card.Text>
                  <Card.Text>
                    <span className="fw-bold">{e.username}</span>
                    {e.description}
                  </Card.Text>
                  <Card.Text className="text-secondary">
                    View all {e.comment}{" "}
                    {e.comment > 1 ? (
                      <span>comments</span>
                    ) : (
                      <span>comment</span>
                    )}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Container>
          </>
        )
      })}
    </>
  )
}

export default App
