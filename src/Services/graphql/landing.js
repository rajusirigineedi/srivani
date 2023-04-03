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
            text
            subtext
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
