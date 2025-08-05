// scripts/create_database.js

const { MongoClient } = require("mongodb");
const fs = require("fs");

// URL de conexión (usa la tuya si es Atlas, esta es local)
const uri = "mongodb://localhost:27017"; // Cambia por tu string Atlas si aplica

// Base de datos y colección
const dbName = "mis_recursos_app";
const collectionName = "recursos";

// Leer el archivo recursos.json
const data = JSON.parse(fs.readFileSync("./data/recursos.json", "utf-8"));

// Función principal
async function main() {
  const client = new MongoClient(uri);

  try {
    await client.connect();
    console.log("✅ Conectado a MongoDB");

    const db = client.db(dbName);
    const collection = db.collection(collectionName);

    // Limpiar colección previa si existe
    await collection.deleteMany({});
    console.log("🗑️ Colección limpiada");

    // Insertar documentos
    const result = await collection.insertMany(data);
    console.log(`📥 Insertados ${result.insertedCount} documentos`);
  } catch (error) {
    console.error("❌ Error al insertar:", error);
  } finally {
    await client.close();
    console.log("🔒 Conexión cerrada");
  }
}

main();
