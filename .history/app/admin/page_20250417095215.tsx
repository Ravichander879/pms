import Image from "next/image";
import Link from "next/link";

import { StatCard } from "@/components/StatCard";
import { columns } from "@/components/table/columns";
import { DataTable } from "@/components/table/DataTable";
import { getRecentAppointmentList } from "@/lib/actions/appointment.actions";

const AdminPage = async () => {
  const appointments = await getRecentAppointmentList();

  return (
    <div className="mx-auto flex max-w-7xl flex-col space-y-14">
      <header className="admin-header">
        <Link href="/" className="cursor-pointer">
          <Image
            src="/assets/icons/logo-full.svg"
            height={32}
            width={162}
            alt="logo"
            className="h-8 w-fit"
          />
        </Link>

        <p className="text-16-semibold">Admin Dashboard</p>
      </header>

      <main className="admin-main">
        <section className="w-full space-y-4">
          <h1 className="header">Welcome 👋</h1>
          <p className="text-dark-700">
            Start the day with managing new appointments
          </p>
        </section>

        <section className="admin-stat">
          <StatCard
            type="appointments"
            count={appointments.scheduledCount}
            label="Scheduled appointments"
            icon={"/assets/icons/appointments.svg"}
          />
          <StatCard
            type="pending"
            count={appointments.pendingCount}
            label="Pending appointments"
            icon={"/assets/icons/pending.svg"}
          />
          <StatCard
            type="cancelled"
            count={appointments.cancelledCount}
            label="Cancelled appointments"
            icon={"/assets/icons/cancelled.svg"}
          />
        </section>

        <section className="space-y-4 mt-8">
        <h2 className="text-2xl font-bold">Doctor Applications</h2>
        <div className="grid gap-4">
          {doctors.map((doctor) => (
            <div key={doctor.$id} className="flex items-center justify-between p-4 bg-white rounded-lg shadow">
              <div>
                <p className="font-semibold">{doctor.name}</p>
                <p className="text-sm text-gray-600">{doctor.specialization}</p>
                <p className="text-sm text-gray-600">{doctor.email}</p>
              </div>
              {!doctor.approved && (
                <div className="flex gap-2">
                  <button 
                    onClick={() => handleApproval(doctor.$id, true)}
                    className="px-4 py-2 bg-green-500 text-white rounded"
                  >
                    Approve
                  </button>
                  <button 
                    onClick={() => handleApproval(doctor.$id, false)}
                    className="px-4 py-2 bg-red-500 text-white rounded"
                  >
                    Reject
                  </button>
                </div>
              )}
              {doctor.approved && (
                <span className="text-green-500">Approved</span>
              )}
            </div>
          ))}
        </div>
      </section>

      <DataTable columns={columns} data={appointments.documents} />
      </main>
    </div>
  );
};

export default AdminPage;
