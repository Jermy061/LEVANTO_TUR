import { Bus, Phone, Clock, MapPin } from 'lucide-react';

interface TransportService {
  id: number;
  driverName: string;
  vehicleType: string;
  phone: string;
  route: string;
  schedule: string;
}

interface TransportCardProps {
  service: TransportService;
}

export default function TransportCard({ service }: TransportCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 hover:border-[#0077B6]/30 p-6 h-full flex flex-col">
      <div className="flex items-start justify-between mb-4">
        <div className="w-12 h-12 bg-[#0077B6] rounded-lg flex items-center justify-center flex-shrink-0">
          <Bus className="w-6 h-6 text-white" />
        </div>
        <span className="px-3 py-1 bg-blue-50 text-[#0077B6] text-xs font-semibold rounded-full">
          {service.vehicleType}
        </span>
      </div>

      <h3 className="text-xl font-bold text-gray-900 mb-2">
        {service.driverName}
      </h3>

      <div className="space-y-3 flex-1">
        <div className="flex items-start text-sm text-gray-700">
          <MapPin className="w-4 h-4 mr-2 text-[#0077B6] mt-0.5 flex-shrink-0" />
          <div>
            <span className="font-medium">Ruta:</span>
            <br />
            <span>{service.route}</span>
          </div>
        </div>

        <div className="flex items-start text-sm text-gray-700">
          <Clock className="w-4 h-4 mr-2 text-[#0077B6] mt-0.5 flex-shrink-0" />
          <div>
            <span className="font-medium">Horario:</span>
            <br />
            <span>{service.schedule}</span>
          </div>
        </div>
      </div>

      <div className="mt-6 pt-4 border-t border-gray-200">
        <a
          href={`tel:+51${service.phone}`}
          className="flex items-center justify-center space-x-2 w-full px-4 py-3 bg-[#0077B6] text-white rounded-lg font-semibold hover:bg-[#005F8F] transition-colors duration-200 shadow-md hover:shadow-lg"
        >
          <Phone className="w-4 h-4" />
          <span>{service.phone}</span>
        </a>
      </div>
    </div>
  );
}
