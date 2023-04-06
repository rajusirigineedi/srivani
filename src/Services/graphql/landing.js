import { useQuery, gql } from "@apollo/client";

export const GetLandingPageDetails = gql`
  query {
    landingPage {
      data {
        attributes {
          MainSubtitle
          MainHeading
          MainHeading2
          NotificationString
          CarouselImages {
            data {
              attributes {
                image {
                  data {
                    attributes {
                      url
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    acheivementSection {
      data {
        attributes {
          BigTitle {
            title
            subtitle
            colorIndex {
              index
            }
          }
          ContentImageLilst {
            data {
              attributes {
                title
                info
                image {
                  data {
                    attributes {
                      url
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    directorWord {
      data {
        attributes {
          BigTitle {
            title
            subtitle
            colorIndex {
              index
            }
          }
          DirectorCard {
            title
            subtitle
            name
            degree
            image {
              data {
                attributes {
                  url
                }
              }
            }
          }
        }
      }
    }
    specialScreen {
      data {
        attributes {
          BigTitle {
            title
            subtitle
            colorIndex {
              index
            }
          }
          FullImage {
            data {
              attributes {
                url
              }
            }
          }
          SpecialCard {
            title
            subtitle
            image {
              data {
                attributes {
                  url
                }
              }
            }
          }
        }
      }
    }
    commentSection {
      data {
        attributes {
          BigTitle {
            title
            subtitle
            colorIndex {
              index
            }
          }
          CommentCard {
            title
            subtitle
            comment
          }
        }
      }
    }
    endWord {
      data {
        attributes {
          BigTitle {
            title
            subtitle
            colorIndex {
              index
            }
          }
        }
      }
    }
  }
`;

export const GetCampusPageDetails = gql`
  query {
    campusPage {
      data {
        attributes {
          BigTitle {
            title
            subtitle
            colorIndex {
              index
            }
          }
          campusImage {
            data {
              attributes {
                url
              }
            }
          }
          description
        }
      }
    }
    directorWord {
      data {
        attributes {
          BigTitle {
            title
            subtitle
            colorIndex {
              index
            }
          }
          DirectorCard {
            title
            subtitle
            name
            degree
            image {
              data {
                attributes {
                  url
                }
              }
            }
          }
        }
      }
    }
    endWord {
      data {
        attributes {
          BigTitle {
            title
            subtitle
            colorIndex {
              index
            }
          }
        }
      }
    }
  }
`;

export const GetAboutUsPageDetails = gql`
  query {
    aboutUs {
      data {
        attributes {
          BigTitle {
            title
            subtitle
            colorIndex {
              index
            }
          }
          ytlink
          fblink
          videoUrl
          description
        }
      }
    }
    specialScreen {
      data {
        attributes {
          BigTitle {
            title
            subtitle
            colorIndex {
              index
            }
          }
          FullImage {
            data {
              attributes {
                url
              }
            }
          }
          SpecialCard {
            title
            subtitle
            image {
              data {
                attributes {
                  url
                }
              }
            }
          }
        }
      }
    }
    commentSection {
      data {
        attributes {
          BigTitle {
            title
            subtitle
            colorIndex {
              index
            }
          }
          CommentCard {
            title
            subtitle
            comment
          }
        }
      }
    }
    endWord {
      data {
        attributes {
          BigTitle {
            title
            subtitle
            colorIndex {
              index
            }
          }
        }
      }
    }
  }
`;

export const EventPageDetails = gql`
  query {
    eventsPage {
      data {
        attributes {
          BigTitle {
            title
            subtitle
            colorIndex {
              index
            }
          }
        }
      }
    }
    imageFolders {
      data {
        attributes {
          folder
          images(pagination: { limit: 1 }) {
            data {
              attributes {
                image {
                  data {
                    attributes {
                      url
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    endWord {
      data {
        attributes {
          BigTitle {
            title
            subtitle
            colorIndex {
              index
            }
          }
        }
      }
    }
  }
`;

export const GetImagesForFolder = gql`
  query ($folder: String, $page: Int) {
    imageFolders(filters: { folder: { eq: $folder } }) {
      data {
        attributes {
          folder
          images(pagination: { pageSize: 7, page: $page }) {
            data {
              attributes {
                image {
                  data {
                    attributes {
                      url
                    }
                  }
                }
                title
                info
              }
            }
          }
        }
      }
    }
  }
`;

export const AcheivementPageDetails = gql`
  query {
    aceivementsPage {
      data {
        attributes {
          BigTitle {
            title
            subtitle
            colorIndex {
              index
            }
          }
          CarouselImages {
            data {
              attributes {
                image {
                  data {
                    attributes {
                      url
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    endWord {
      data {
        attributes {
          BigTitle {
            title
            subtitle
            colorIndex {
              index
            }
          }
        }
      }
    }
  }
`;

export const GetEndWords = gql`
  query {
    endWord {
      data {
        attributes {
          BigTitle {
            title
            subtitle
            colorIndex {
              index
            }
          }
        }
      }
    }
  }
`;

export const ContactPageDetails = gql`
  query {
    contactPage {
      data {
        attributes {
          ContactTitle {
            title
            subtitle
            colorIndex {
              index
            }
          }
          LocationTitle {
            title
            subtitle
            colorIndex {
              index
            }
          }
          locationImage {
            data {
              attributes {
                url
              }
            }
          }
        }
      }
    }
    endWord {
      data {
        attributes {
          BigTitle {
            title
            subtitle
            colorIndex {
              index
            }
          }
        }
      }
    }
  }
`;
