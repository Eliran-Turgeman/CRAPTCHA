export default function handler(req, res) {
    res.status(403).json({
      success: false,
      message: "Access denied by CRAPTCHA. Nobody gets through.",
    });
  }
  