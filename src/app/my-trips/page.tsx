"use client";

import React, { useCallback, useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Prisma } from "@prisma/client";
import Link from "next/link";

import UserReservationItem from "./components/UserReservationItem";
import Button from "@/components/Button";

const MyTrips = () => {
  const [reservations, setReservations] = useState<
    Prisma.TripReservationGetPayload<{
      include: { trip: true };
    }>[]
  >([]);

  const { status, data } = useSession();

  const router = useRouter();

  const fetchReservations = useCallback(async () => {
    const response = await fetch(`/api/user/${(data?.user as any)?.id}/reservations`);
    const json = await response.json();
    setReservations(json);
  }, [data?.user, setReservations]);


  useEffect(() => {
    if (status === "unauthenticated") {
      return router.push("/");
    }

    fetchReservations();
  }, [status, router, fetchReservations]);

  return (
    <div className="container mx-auto p-5">
      <h1 className="font-semibold text-primaryDarker text-xl">Minhas Viagens</h1>
      <div className="md:grid md:gap-5 md:grid-cols-2 lg:grid-cols-3">
        {reservations.length > 0 ? (
          reservations?.map((reservation) => (
            <UserReservationItem fetchReservations={fetchReservations} key={reservation.id} reservation={reservation} />
          ))
        ) : (
          <div className="flex flex-col">
            <p className="mt-2 font-medium text-primaryDarker">Você ainda não tem nenhuma reserva! =(</p>
            <Link href="/">
              <Button variant="primary" className="w-full mt-2">Fazer reserva</Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyTrips;