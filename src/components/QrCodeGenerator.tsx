import React from 'react';
import { QRCodeSVG } from 'qrcode.react';

interface QRCodeGeneratorProps {
  restaurantId: string;
  table: string;
}

const QRCodeGenerator: React.FC<QRCodeGeneratorProps> = ({ restaurantId, table }) => {
  // This is the URL will be encoded into the QR code
  const qrCodeValue = `https://facebook.com`;

  return (
    <div className="flex flex-col items-center">
      <QRCodeSVG value={qrCodeValue} size={256} />
      <p className="mt-4 text-center">
        Scan this QR code to view the menu for Table {table} at Restaurant {restaurantId}
      </p>
    </div>
  );
};

export default QRCodeGenerator;
