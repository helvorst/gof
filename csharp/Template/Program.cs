using System;

namespace Template
{
    abstract class Brewer {

        public void Brew() {
            this.GetWater();
            this.GetHerb();
            this.BeforeInfuseHook();
            this.Infuse();
        }

        protected void GetWater() {
            Console.WriteLine("Getting water...");
        }

        protected void Infuse() {
            Console.WriteLine("Infusing for 10 minutes...");
        }

        protected abstract void GetHerb();

        protected virtual void BeforeInfuseHook() {}
    }

    class JasmineTeaBrewer: Brewer {
        protected override void GetHerb() {
            Console.WriteLine("Getting jasmine leaves...");
        }
    }

    class BlackTeaBrewer: Brewer {
        protected override void GetHerb()
        {
            Console.WriteLine("Getting black tea leaves...");
        }

        protected override void BeforeInfuseHook()
        {
            Console.WriteLine("Adding lemon to the black tea...");
        }
    }

    class Client {
        public static void MakeBeverage(Brewer brewer) {
            brewer.Brew();
        }
    }

    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Client will make Jasmine tea");
            Client.MakeBeverage(new JasmineTeaBrewer());
            Console.WriteLine("Now Clent will make a cup of Black Tea");
            Client.MakeBeverage(new BlackTeaBrewer());
        }
    }
}
