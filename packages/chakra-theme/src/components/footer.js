import { Box, PseudoBox, SimpleGrid } from "@chakra-ui/core";
import React from "react";
import { SocialMenu } from "./header/social-menu";
import { connect } from "frontity";

const FooterSection = props => (
  <Box
    as="footer"
    pos="relative"
    bg="#272727"
    py={{ base: "32px", lg: "80px" }}
    {...props}
  />
);

const FooterSectionGroup = props => (
  <SimpleGrid
    columns={{ base: 1, md: 3 }}
    maxWidth="1150px"
    mx="auto"
    width="90%"
    border="2px solid"
    borderColor="#eca419"
    {...props}
  />
);

const FooterSectionItem = props => (
  <PseudoBox padding="24px" color="white" textAlign="center" {...props} />
);

const Footer = ({ state }) => (
  <FooterSection alignSelf="flex-end">
    <FooterSectionGroup>
      <FooterSectionItem
        fontWeight="bold"
        fontFamily="heading"
        textTransform="uppercase"
      >
        © 2019 Frontity
      </FooterSectionItem>

      <FooterSectionItem
        borderX={{ base: 0, md: "2px solid #eca419" }}
        borderY={{ base: "2px solid #eca419", md: 0 }}
      >
        <SocialMenu
          ml="0"
          justifyContent="center"
          menu={state.theme.socialLinks}
        />
      </FooterSectionItem>

      <FooterSectionItem
        fontWeight="bold"
        fontFamily="heading"
        textTransform="uppercase"
      >
        Made with Frontity
      </FooterSectionItem>
    </FooterSectionGroup>
  </FooterSection>
);

export default connect(Footer);
