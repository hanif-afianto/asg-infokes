import fs from "fs";
import Papa from "papaparse";

export async function readCSV<T>(filePath: string): Promise<T[]> {
  return new Promise((resolve, reject) => {
    try {
      const fileContent = fs.readFileSync(filePath, "utf8");
      Papa.parse(fileContent, {
        header: true,
        skipEmptyLines: true,
        dynamicTyping: true,
        complete: (result) => resolve(result.data as T[]),
        error: (error) => reject(error),
      });
    } catch (error) {
      reject(error);
    }
  });
}
