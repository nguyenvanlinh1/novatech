import { Input, Checkbox, Button, Typography } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getUser, login } from "../../State/Auth/Action";
import { Box, CircularProgress } from "@mui/material";
import { OauthConfig } from "../../State/Auth/Outbound/configuration";
import { getToken } from "../../State/Auth/Outbound/localStorageService";

export function SignIn() {
  const handleContinueWithGoogle = () => {
    const callbackUrl = OauthConfig.redirectUri;
    const authUrl = OauthConfig.authUri;
    const googleClientId = OauthConfig.clientId;

    const targetUrl = `${authUrl}?redirect_uri=${encodeURIComponent(
      callbackUrl
    )}&response_type=code&client_id=${googleClientId}&scope=openid%20email%20profile`;

    window.location.href = targetUrl;
  };

  const { auth } = useSelector((store) => store);
  const jwt = localStorage.getItem("jwt");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!data.email) {
      setError("Email không được để trống");
      return;
    } else if (!data.password) {
      setError("Vui lòng nhập mật khẩu");
      return;
    }
    dispatch(login(data));
    setLoading(true);
  };

  useEffect(() => {
    const accessToken = getToken();
    if(accessToken){
      dispatch(getUser(accessToken));
    }
    if (jwt) {
      dispatch(getUser(jwt));
    }
  }, [navigate, jwt]);

  useEffect(() => {
    if (auth.error === "Request failed with status code 401") {
      setError("Thông tin email hoặc mật khẩu không chính xác");
      setLoading(false);
    }
    if (
      auth.user &&
      auth.user.result.email &&
      auth.user.result.roles.length !== 2
    ) {
      setTimeout(() => {
        navigate("/");
      }, 3000);
    } else if (auth.user && auth.user.result.roles.length === 2) {
      setTimeout(() => {
        navigate("/admin");
      }, 3000);
    }
  });

  return (
    <section className="m-8 flex gap-4">
      <div className="w-full lg:w-3/5 mt-24">
        <div className="text-center">
          <Typography variant="h2" className="font-bold mb-4 text-black">
            Đăng nhập
          </Typography>
          <Typography
            variant="paragraph"
            color="blue-gray"
            className="text-lg font-normal"
          >
            Nhập email và mật khẩu của bạn để đăng nhập.
          </Typography>
        </div>
        <form
          onSubmit={handleSubmit}
          className="mt-8 mb-2 mx-auto w-80 max-w-screen-lg lg:w-1/2"
        >
          <div className="mb-1 flex flex-col gap-6">
            <Typography
              variant="small"
              color="blue-gray"
              className="-mb-3 font-medium"
            >
              Email
            </Typography>
            <Input
              size="lg"
              placeholder="nvanlinh1406@mail.com"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              name="email"
              id="email"
              value={data.email}
              onChange={(e) => handleChange(e)}
            />
            <Typography
              variant="small"
              color="blue-gray"
              className="-mb-3 font-medium"
            >
              Mật khẩu
            </Typography>
            <Input
              type="password"
              size="lg"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              name="password"
              id="password"
              value={data.password}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <p className="text-[#DD5746]">{error}</p>
          <Button type="submit" className="mt-6" fullWidth>
            Đăng Nhập
          </Button>
        </form>
        <form className="mt-8 mb-2 mx-auto w-80 max-w-screen-lg lg:w-1/2">
          <div className="space-y-4 mt-8">
            <Button
              size="lg"
              color="white"
              className="flex items-center gap-2 justify-center shadow-md"
              fullWidth
              onClick={handleContinueWithGoogle}
            >
              <svg
                width="17"
                height="16"
                viewBox="0 0 17 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_1156_824)">
                  <path
                    d="M16.3442 8.18429C16.3442 7.64047 16.3001 7.09371 16.206 6.55872H8.66016V9.63937H12.9813C12.802 10.6329 12.2258 11.5119 11.3822 12.0704V14.0693H13.9602C15.4741 12.6759 16.3442 10.6182 16.3442 8.18429Z"
                    fill="#4285F4"
                  />
                  <path
                    d="M8.65974 16.0006C10.8174 16.0006 12.637 15.2922 13.9627 14.0693L11.3847 12.0704C10.6675 12.5584 9.7415 12.8347 8.66268 12.8347C6.5756 12.8347 4.80598 11.4266 4.17104 9.53357H1.51074V11.5942C2.86882 14.2956 5.63494 16.0006 8.65974 16.0006Z"
                    fill="#34A853"
                  />
                  <path
                    d="M4.16852 9.53356C3.83341 8.53999 3.83341 7.46411 4.16852 6.47054V4.40991H1.51116C0.376489 6.67043 0.376489 9.33367 1.51116 11.5942L4.16852 9.53356Z"
                    fill="#FBBC04"
                  />
                  <path
                    d="M8.65974 3.16644C9.80029 3.1488 10.9026 3.57798 11.7286 4.36578L14.0127 2.08174C12.5664 0.72367 10.6469 -0.0229773 8.65974 0.000539111C5.63494 0.000539111 2.86882 1.70548 1.51074 4.40987L4.1681 6.4705C4.8001 4.57449 6.57266 3.16644 8.65974 3.16644Z"
                    fill="#EA4335"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1156_824">
                    <rect
                      width="16"
                      height="16"
                      fill="white"
                      transform="translate(0.5)"
                    />
                  </clipPath>
                </defs>
              </svg>
              <span>Đăng nhập bằng Google</span>
            </Button>
            <Button
              size="lg"
              color="white"
              className="flex items-center gap-2 justify-center shadow-md"
              fullWidth
              // onClick={handleGitHubLogin}
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/GitHub_Invertocat_Logo.svg/1200px-GitHub_Invertocat_Logo.svg.png"
                height={24}
                width={24}
                alt=""
              />
              <span>Đăng Nhập bằng GitHub</span>
            </Button>
          </div>
          <Typography
            variant="paragraph"
            className="text-center text-blue-gray-500 font-medium mt-4"
          >
            Chưa đăng ký?
            <Link
              to="/auth/signup"
              className="text-blue-500 ml-1 underline hover:text-[#DD5746]"
            >
              Tạo tài khoản
            </Link>
          </Typography>
        </form>
      </div>
      <div className="w-2/5 h-full hidden lg:block">
        <img
          src="https://demos.creative-tim.com/material-tailwind-kit-react/img/pattern.png"
          className="h-full w-full object-cover rounded-3xl"
        />
      </div>
      {loading && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(255, 255, 255, 0.8)",
            zIndex: 10,
          }}
        >
          <CircularProgress />
        </Box>
      )}
    </section>
  );
}

export default SignIn;
