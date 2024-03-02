// Chakra imports
import { Box, Flex, Grid, Icon, useColorModeValue, Text } from "@chakra-ui/react";
// Assets
import BackgroundCard1 from "assets/img/BackgroundCard1.png";
import { MastercardIcon, VisaIcon } from "components/Icons/Icons";
import React from "react";
import { FaFilePdf, FaPaypal, FaWallet } from "react-icons/fa";
import { RiMastercardFill } from "react-icons/ri";
import {
  billingData,
  invoicesData,
  newestTransactions,
  olderTransactions,
} from "variables/general";
import BillingInformation from "./components/BillingInformation";
import CreditCard from "./components/CreditCard";
import Invoices from "./components/Invoices";
import PaymentMethod from "./components/PaymentMethod";
import PaymentStatistics from "./components/PaymentStatistics";
import Transactions from "./components/Transactions";
import Card from "components/Card/Card";


function Billing() {
  const textColor = useColorModeValue("gray.700", "white");

  return (
    <Flex direction='column' pt={{ base: "120px", md: "75px" }}>
      <Grid templateColumns={{ sm: "1fr", lg: "2fr 1.2fr" }} templateRows='1fr'>
      <Card my={{ lg: "24px" }} me={{ lg: "24px" }}>
      <Text color={textColor} fontSize='lg' fontWeight='bold'>
            Participated Studies
          </Text>
          <br/>
        <Box border="1px solid teal" borderRadius='20px' boxShadow='5px 5px 2px teal'>
        <Card my={{ lg: "24px" }} me={{ lg: "24px" }} >
          <Text fontSize='md' fontWeight='bold' color='teal'>Regional Analysis - Asia</Text>
          <Grid
            templateColumns={{
              sm: "1fr",
              md: "1fr 1fr",
              xl: "1fr 1fr 1fr 1fr",
            }}
            templateRows={{ sm: "auto auto auto", md: "1fr auto", xl: "1fr" }}
            gap='26px'>
            {/* <CreditCard
              backgroundImage={BackgroundCard1}
              title={"Regional Analysis - Asia"}
              number={"7812 2139 0823 XXXX"}
              validity={{
                name: "VALID THRU",
                data: "05/24",
              }}
              cvv={{
                name: "CVV",
                code: "09x",
              }}
              icon={
                <Icon
                  as={RiMastercardFill}
                  w='48px'
                  h='auto'
                  color='gray.400'
                />
              }
            /> */}
            <PaymentStatistics
              icon={<Icon h={"24px"} w={"24px"} color='white' as={FaFilePdf} />}
              title={"Phase 1 Report"}
              description={"Feb 1, 2024"}
              amount={2000}
            />
            <PaymentStatistics
              icon={<Icon h={"24px"} w={"24px"} color='white' as={FaFilePdf} />}
              title={"Phase 2 Report"}
              description={"March 1, 2024"}
              amount={4550}
            />
          </Grid>
          </Card>
          {/* <PaymentMethod
            title={"Payment Method"}
            mastercard={{
              icon: <MastercardIcon w='100%' h='100%' />,
              number: "7812 2139 0823 XXXX",
            }}
            visa={{
              icon: <VisaIcon w='100%' h='100%' />,
              number: "7812 2139 0823 XXXX",
            }}
          /> */}
        </Box>
        </Card>
        <Invoices title={"Updates"} data={invoicesData} />
      </Grid>
      <Grid 
      // templateColumns={{ sm: "1fr", lg: "1.6fr 1.2fr" }}
      >
        <BillingInformation title={"Research Studies"} data={billingData} />
        {/* <Transactions
          title={"Your Transactions"}
          date={"23 - 30 March"}
          newestTransactions={newestTransactions}
          olderTransactions={olderTransactions}
        /> */}
      </Grid>
    </Flex>
  );
}

export default Billing;
