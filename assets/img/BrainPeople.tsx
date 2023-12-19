import { SVGProps } from "react";

export const BrainPeople = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="80"
      height="80"
      viewBox="0 0 80 80"
      fill="none"
      {...props}
    >
      <path
        d="M53.6983 35.4857C52.9255 35.1033 52.4631 34.6177 52.2839 34.0017C51.9535 32.8649 52.6911 31.6185 52.7063 31.5929C52.803 31.4132 52.8272 31.2033 52.7742 31.0063C52.7212 30.8092 52.595 30.6399 52.4212 30.5329C52.2475 30.4259 52.0394 30.3893 51.8396 30.4307C51.6398 30.472 51.4634 30.5881 51.3463 30.7553C51.2999 30.8297 50.2263 32.6057 50.7463 34.4353C51.0503 35.4977 51.8055 36.3337 52.9903 36.9209C53.0846 36.9684 53.1873 36.9968 53.2925 37.0044C53.3977 37.0121 53.5035 36.9988 53.6036 36.9654C53.7037 36.9321 53.7962 36.8792 53.8758 36.8099C53.9554 36.7406 54.0205 36.6563 54.0673 36.5617C54.1142 36.4672 54.1419 36.3643 54.1488 36.259C54.1557 36.1537 54.1417 36.0481 54.1077 35.9482C54.0736 35.8483 54.0201 35.7562 53.9502 35.6771C53.8804 35.598 53.7956 35.5335 53.7007 35.4873L53.6983 35.4857Z"
        fill="#FF3A2D"
      />
      <path
        d="M41.1198 8.09685C24.467 9.54165 13.9758 19.3601 15.6206 31.3961C15.7825 32.5625 15.5253 33.7485 14.895 34.7433L10.7198 41.3753C9.93023 42.6281 10.7998 44.1993 12.387 44.3977L15.7598 44.8177C16.4638 44.9057 16.8758 45.5753 16.583 46.1561L15.1574 48.9849C14.7894 49.7153 15.0358 50.5777 15.7518 51.0593L17.8022 52.4377C18.2502 52.7393 18.4502 53.2537 18.3054 53.7393C17.559 56.2489 16.3598 63.6265 30.3798 58.2017C31.5582 57.7457 32.9246 57.9457 33.883 58.7105C36.0558 60.4465 35.9022 64.9561 35.1926 70.4881C35.0894 71.2937 35.7918 72.0001 36.6966 72.0001H62.9198C64.1022 72.0001 64.8934 70.9073 64.4086 69.9409C62.0798 65.2945 60.843 52.9393 67.7278 38.6521C75.2486 23.0449 58.543 6.58485 41.1198 8.09685ZM38.9198 46.2569C38.9198 46.2569 25.8894 37.4977 24.355 27.3601C23.1806 19.6001 30.7902 14.1801 38.915 21.5849L38.9198 46.2569ZM57.8238 36.1393C57.699 36.1487 57.5781 36.1874 57.4709 36.2521C57.3637 36.3168 57.2732 36.4058 57.2067 36.5118C57.1401 36.6179 57.0994 36.7381 57.0878 36.8628C57.0762 36.9875 57.094 37.1131 57.1398 37.2297L57.1502 37.2569C57.4425 38.0198 57.517 38.8489 57.3653 39.6516C57.2137 40.4544 56.8419 41.1992 56.2915 41.803C55.7411 42.4067 55.0336 42.8455 54.2483 43.0704C53.4629 43.2954 52.6304 43.2976 51.8438 43.0769C51.6534 43.0234 51.4499 43.0423 51.2726 43.1301C51.0953 43.2178 50.9568 43.3682 50.8838 43.5521C50.6044 44.2585 50.1408 44.8771 49.5412 45.3436C48.9416 45.81 48.228 46.1073 47.4746 46.2045C46.7212 46.3017 45.9555 46.1952 45.2571 45.8962C44.5588 45.5971 43.9534 45.1164 43.5038 44.5041V36.8881C43.9182 37.0433 44.3102 37.3449 44.687 37.7977C44.7543 37.8784 44.8367 37.9451 44.9298 37.994C45.0228 38.0428 45.1245 38.0729 45.2291 38.0824C45.3338 38.092 45.4393 38.0808 45.5396 38.0496C45.6399 38.0184 45.7331 37.9677 45.8138 37.9005C45.8946 37.8332 45.9613 37.7507 46.0101 37.6577C46.059 37.5647 46.0891 37.463 46.0986 37.3583C46.1081 37.2537 46.097 37.1482 46.0658 37.0479C46.0345 36.9476 45.9839 36.8544 45.9166 36.7737C45.099 35.7921 44.2366 35.3785 43.5038 35.2329V29.0857C44.2366 28.9401 45.099 28.5257 45.9166 27.5449C46.0524 27.3818 46.1179 27.1715 46.0986 26.9602C46.0793 26.7488 45.9769 26.5538 45.8138 26.4181C45.6508 26.2823 45.4405 26.2168 45.2291 26.2361C45.0178 26.2554 44.8228 26.3578 44.687 26.5209C44.3102 26.9737 43.9182 27.2753 43.5038 27.4305V19.9105C43.9989 19.2223 44.682 18.6915 45.4712 18.3819C46.2604 18.0723 47.1222 17.997 47.9531 18.165C48.7841 18.333 49.5489 18.7371 50.1559 19.329C50.7628 19.9208 51.1861 20.6752 51.375 21.5017V21.5105C51.5036 22.0807 51.5175 22.6709 51.416 23.2466C51.3145 23.8223 51.0996 24.3721 50.7838 24.8641C50.6751 25.0422 50.6404 25.2558 50.6869 25.4592C50.7335 25.6626 50.8577 25.8398 51.033 25.9529C51.2084 26.0661 51.421 26.1062 51.6255 26.0648C51.8301 26.0234 52.0103 25.9037 52.1278 25.7313C52.869 24.5784 53.1941 23.2069 53.0494 21.8441C53.6936 21.6471 54.3744 21.6004 55.0395 21.7073C55.7046 21.8142 56.3364 22.072 56.8864 22.461C57.4364 22.8499 57.8901 23.3596 58.2126 23.951C58.5351 24.5424 58.7179 25.1998 58.747 25.8729C58.3329 25.7839 57.9106 25.7394 57.487 25.7401C57.2749 25.7401 57.0714 25.8243 56.9213 25.9744C56.7713 26.1244 56.687 26.3279 56.687 26.5401C56.687 26.7522 56.7713 26.9557 56.9213 27.1057C57.0714 27.2558 57.2749 27.3401 57.487 27.3401C58.057 27.3388 58.6217 27.4488 59.1494 27.6641L59.187 27.6801C60.1006 28.061 60.8592 28.7385 61.3406 29.6034C61.8221 30.4682 61.9982 31.47 61.8408 32.4471C61.6833 33.4243 61.2013 34.32 60.4726 34.9898C59.7439 35.6596 58.8108 36.0645 57.8238 36.1393Z"
        fill="#FF3A2D"
      />
    </svg>
  );
};
