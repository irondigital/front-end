import { gql } from "@apollo/client";

export const UPDATE_PROFILE = gql`
  mutation UpdateProfile($name: String!, $bio: String!) {
    updateProfile(name: $name, bio: $bio) {
      name
      bio
    }
  }
`;