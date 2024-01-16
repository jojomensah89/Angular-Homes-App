import { Injectable } from "@angular/core";
import { HousingLocation } from "./housinglocation";
import axios from "axios";

@Injectable({
  providedIn: "root",
})
export class HousingService {
  url = "https://nextjs-dashboard-dun-xi-36.vercel.app/api/locations";

  async getAllHousingLocations(): Promise<HousingLocation[]> {
    try {
      const response = await axios.get<HousingLocation[]>(this.url);

      return response.data || [];
    } catch (error) {
      console.error("Error fetching housing locations:", error);
      return [] as HousingLocation[]; // Explicitly specify the type
    }
  }

  async getHousingLocationById(
    id: number
  ): Promise<HousingLocation | undefined> {
    try {
      const response = await axios.get<HousingLocation>(`${this.url}/${id}`);
      return response.data || ({} as HousingLocation); // Explicitly specify the type
    } catch (error) {
      console.error(`Error fetching housing location with ID ${id}:`, error);
      return {} as HousingLocation; // Explicitly specify the type
    }
  }

  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(
      `Homes application received: firstName: ${firstName}, lastName: ${lastName}, email: ${email}.`
    );
  }
}
