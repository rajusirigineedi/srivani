import { useQuery, gql } from "@apollo/client";

export const GetLandingPageDetails = gql`
  query {
    landingPage {
      data {
        attributes {
          MainSubtitle
          MainHeading
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
          title
          subtitle
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
          title
          subtitle
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
          title
          subtitle
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
          title
          subtitle
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
          title
          subtitle
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
          title
          subtitle
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
          title
          subtitle
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
          title
          subtitle
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
          title
          subtitle
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
          title
          subtitle
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
          title
          subtitle
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
          title
          subtitle
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
          title
          subtitle
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
          title
          subtitle
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
          title
          subtitle
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
          title
          subtitle
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
          title
          subtitle
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
          title
          subtitle
          locationTitle
          locationSubtitle
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
          title
          subtitle
        }
      }
    }
  }
`;
