using System;
using System.Collections.Generic;

namespace aula11
{
    class Program
    {
        static void Main(string[] args)
        {
            // Criando listas
            List<string> carros = new List<string>();

            // Adicionar elementos
            carros.Add("Gol");
            carros.Add("Fiat");
            carros.Add("Chevrolet");

            foreach(string c in carros)
            {
                Console.WriteLine($"Carro: {c}");
            }

            Console.ReadKey();
        }
    }
}
