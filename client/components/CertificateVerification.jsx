import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import http from "../services/httpService";

const CertificateVerification = () => {
  const [searchParams] = useSearchParams();
  const [certificateId, setCertificateId] = useState("");
  const [holderName, setHolderName] = useState("");
  const [issueYear, setIssueYear] = useState("");
  const [verificationResult, setVerificationResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchCertificate = async ({ id, name, year }) => {
    const normalizedId = id?.trim().toUpperCase();
    if (!normalizedId) {
      setVerificationResult({
        status: "error",
        message: "Certificate number is required for verification.",
      });
      return;
    }

    setLoading(true);
    try {
      const { data } = await http.get(
        `/api/certificates/verify?id=${encodeURIComponent(normalizedId)}`,
      );
      const warnings = [];

      if (name && name.trim().length > 0) {
        if (data.holderName.toLowerCase() !== name.trim().toLowerCase()) {
          warnings.push("Holder name does not match the certificate record.");
        }
      }
      if (year && year.trim().length > 0) {
        if (String(data.issueYear) !== year.trim()) {
          warnings.push("Issue year does not match the certificate record.");
        }
      }

      setVerificationResult({
        status: "valid",
        message: "Certificate is valid.",
        certificate: data,
        warnings,
      });
    } catch (error) {
      if (error.response && error.response.status === 404) {
        setVerificationResult({
          status: "invalid",
          message:
            "This certificate is invalid or not found in the verification registry.",
          certificate: null,
          warnings: [],
        });
      } else {
        setVerificationResult({
          status: "error",
          message:
            "Unable to verify the certificate right now. Please try again later.",
          certificate: null,
          warnings: [],
        });
      }
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchCertificate({
      id: certificateId,
      name: holderName,
      year: issueYear,
    });
  };

  useEffect(() => {
    const qrId = searchParams.get("id") || searchParams.get("certificateId");
    const qrName = searchParams.get("name");
    const qrYear = searchParams.get("year");

    if (qrId) {
      setCertificateId(qrId);
      if (qrName) setHolderName(qrName);
      if (qrYear) setIssueYear(qrYear);
      fetchCertificate({ id: qrId, name: qrName, year: qrYear });
    }
  }, [searchParams]);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-gray-50 border border-green-200 rounded-3xl p-8 shadow-sm">
          <h1 className="text-4xl font-bold text-green-800 mb-4">
            Certificate Verification
          </h1>
          <p className="text-gray-600 mb-4">
            Scan the certificate QR code to open this page and validate the
            record automatically.
          </p>
          <p className="text-gray-600 mb-8">
            Example QR code URL:{" "}
            <span className="font-medium">
              /verify-certificate?id=SLSU-AP-2025-001
            </span>
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                className="block text-gray-700 font-medium mb-2"
                htmlFor="certificateId"
              >
                Certificate Number
              </label>
              <input
                id="certificateId"
                value={certificateId}
                onChange={(event) => setCertificateId(event.target.value)}
                placeholder="e.g. SLSU-AP-2025-001"
                className="w-full rounded-xl border border-gray-300 p-3 focus:border-green-700 focus:outline-none"
              />
            </div>

            <div>
              <label
                className="block text-gray-700 font-medium mb-2"
                htmlFor="holderName"
              >
                Certificate Holder Name (optional)
              </label>
              <input
                id="holderName"
                value={holderName}
                onChange={(event) => setHolderName(event.target.value)}
                placeholder="Full name as printed on certificate"
                className="w-full rounded-xl border border-gray-300 p-3 focus:border-green-700 focus:outline-none"
              />
            </div>

            <div>
              <label
                className="block text-gray-700 font-medium mb-2"
                htmlFor="issueYear"
              >
                Issue Year (optional)
              </label>
              <input
                id="issueYear"
                value={issueYear}
                onChange={(event) => setIssueYear(event.target.value)}
                placeholder="2025"
                className="w-full rounded-xl border border-gray-300 p-3 focus:border-green-700 focus:outline-none"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="inline-flex items-center justify-center rounded-full bg-green-800 px-6 py-3 text-white text-lg font-semibold hover:bg-green-700 transition-colors disabled:cursor-not-allowed disabled:bg-green-400"
            >
              {loading ? "Checking..." : "Verify Certificate"}
            </button>
          </form>

          {verificationResult && (
            <div
              className={`mt-8 rounded-2xl border p-4 ${
                verificationResult.status === "valid"
                  ? "border-green-300 bg-green-50 text-green-800"
                  : "border-red-300 bg-red-50 text-red-800"
              }`}
            >
              <p className="font-semibold text-lg mb-2">
                {verificationResult.status === "valid"
                  ? "Certificate is valid"
                  : verificationResult.status === "invalid"
                    ? "Certificate is invalid"
                    : "Verification required"}
              </p>
              <p>{verificationResult.message}</p>

              {verificationResult.certificate && (
                <div className="mt-4 rounded-2xl bg-white border border-green-100 p-4">
                  <h2 className="text-xl font-semibold text-green-800 mb-3">
                    Certificate details
                  </h2>
                  <ul className="space-y-2 text-gray-700">
                    <li>
                      <strong>ID:</strong>{" "}
                      {verificationResult.certificate.certificateId}
                    </li>
                    <li>
                      <strong>Holder:</strong>{" "}
                      {verificationResult.certificate.holderName}
                    </li>
                    <li>
                      <strong>Position:</strong>{" "}
                      {verificationResult.certificate.position}
                    </li>
                    <li>
                      <strong>Issue year:</strong>{" "}
                      {verificationResult.certificate.issueYear}
                    </li>
                    <li>
                      <li>
                        <strong>Program:</strong>{" "}
                        {verificationResult.certificate.program}
                      </li>
                      <strong>Institution:</strong>{" "}
                      {verificationResult.certificate.institution}
                    </li>
                  </ul>
                </div>
              )}

              {verificationResult.warnings?.length > 0 && (
                <div className="mt-4 rounded-2xl bg-yellow-50 border border-yellow-200 p-4 text-yellow-800">
                  <h3 className="font-semibold mb-2">Verification warnings</h3>
                  <ul className="list-disc list-inside space-y-1">
                    {verificationResult.warnings.map((warning, index) => (
                      <li key={index}>{warning}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}

          <div className="mt-8 text-gray-600">
            <p className="font-semibold">Note:</p>
            <p>
              Use a QR code that opens a URL such as{" "}
              <span className="font-medium">
                /verify-certificate?id=YOUR_CERTIFICATE_ID
              </span>
              . When scanned, this page will automatically verify the
              certificate and display its status and details.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificateVerification;
