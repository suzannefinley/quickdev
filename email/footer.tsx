import {
  Section,
  //Img,
  Text,
  // Row,
  // Column,
  //Link,
  Tailwind
} from '@react-email/components';
import {
  BUSINESS_ADDRESS,
  //SUPPORT_EMAIL,
  COMPANY_NAME,
  APP_DESCRIPTION
  //APP_NAME,
  //SERVER_URL,
  //SERVER_EMAIL_LOGO_URL
} from '@/lib/constants';

export const EmailFooter = () => (
  <Tailwind>
    <Section className="text-center">
      <table className="w-full">
        <tr className="w-full">
          <td align="center">
            <Text className="my-2 font-semibold text-[16px] text-gray-900 leading-6">
              {COMPANY_NAME}
            </Text>
            <Text className="mt-1 mb-0 text-[16px] text-gray-500 leading-6">
              {APP_DESCRIPTION}
            </Text>
          </td>
        </tr>

        <tr>
          <td align="center">
            <Text className="my-2 font-semibold text-[16px] text-gray-500 leading-6">
              {BUSINESS_ADDRESS}
            </Text>
          </td>
        </tr>
      </table>
    </Section>
  </Tailwind>
);
